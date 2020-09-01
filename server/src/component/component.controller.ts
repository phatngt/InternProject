import { Controller, Get,Query } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

import {Response} from '../response'
import { Component } from './component.entity';
import { Connection } from 'typeorm';

@Controller('component')
export class ComponentController {

  constructor(@InjectRepository(Component)
  private componentRepository: Repository<Component>,
  private connection: Connection){
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
         query = query.where('template.type like :name',{name: /*'%' + keyword + '%'}*/ keyword})
         query = query.leftJoinAndSelect("template.input_page","pages");
       }

       response.data = await query.getMany();

      } catch (ex) {
        console.log("error: " + ex.message);
        response.error.push(ex.message);
        response.success = false;
      }
    
     return response;
   }
    



}
