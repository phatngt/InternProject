import { Controller, Get,Query } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

import {Response} from '../response'
import { Component } from './component.entity';

@Controller('component')
export class ComponentController {

  constructor(@InjectRepository(Component)
  private componentRepository: Repository<Component>){
  }
  

    @Get()
     async findOne(@Query('id') id : number): Promise<Response> {
       var response = new Response();
       try {
        response.data = await this.componentRepository
        .createQueryBuilder("template")
        .where('template.id = :templateId',{templateId: id})
        .getOne();
        
        

       } catch (ex) {
        console.log("error: " + ex.message);
         response.error.push(ex.message);
         response.success = false;
       }
     
      return response;
    }


    @Get('list')
    async getList(@Query('keyword') keyword : string): Promise<Response> {
      var response = new Response();
      try {

       var query = this.componentRepository.createQueryBuilder("template")
       
       if(keyword){
         query = query.where('template.name like :name',{name: '%' + keyword + '%'})
       }

       response.data = await query.orderBy("template.id","DESC").getMany();

      } catch (ex) {
        console.log("error: " + ex.message);
        response.error.push(ex.message);
        response.success = false;
      }
    
     return response;
   }
    



}
