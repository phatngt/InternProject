import { Controller, Get, Param, Post, Body, HostParam, Query } from '@nestjs/common';
import { PageService } from './page.service';
import { PageDto } from './interfaces/page.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import Page from './page.entity';
import {Response} from '../response'
import { InputService } from 'src/input/input.service';
import { type } from 'os';

@Controller('page')
export class PageController {

  constructor(@InjectRepository(Page)
  private pageRepository: Repository<Page>,
  private readonly pageService: PageService,
  private inputService: InputService,){

  }
  

    @Get()
     async findOne(@Query('id') id : number): Promise<any> {
       var response = new Response();
       try {
        response.data = await this.pageRepository
        .createQueryBuilder("page")
        .where('page.id = :pageId',{pageId: id})
        .getOne();
        
        

       } catch (ex) {
        console.log("error: " + ex.message);
         response.error.push(ex.message);
         response.success = false;
       }
     
      return response;
      // return this.pageService.findAll();
    }


    @Get('name')
    async getList(@Query('keyword') keyword : string): Promise<any> {
      var response = new Response();
      // try {

      //  var query = this.pageRepository.createQueryBuilder("page")
       
      //  if(keyword){
      //    query = query.where('page.name = :name',{name: keyword})
      //  }

      //  response.data = await query.getMany();

      // } catch (ex) {
      //   console.log("error: " + ex.message);
      //   response.error.push(ex.message);
      //   response.success = false;
      // }
      
      try {
        let dataOfPageTable;
        var query = this.pageRepository.createQueryBuilder("page")
        if(keyword){
          query = query.where('page.name = :name',{name: keyword}).leftJoinAndSelect("page.components","name_page");
          dataOfPageTable = await query.getMany();
          response.data = dataOfPageTable;
        }
        if(dataOfPageTable){ 
          let typeComponent = this.pageService.handleDataFromPageTable(dataOfPageTable);
         // response.data = typeComponent;

        }
        } catch (ex) {
          console.log("error: " + ex.message);
          response.error.push(ex.message);
          response.success = false;
        }
      
      
      return response;
   }
    


    @Post()
    async create(@Body() pageDto: PageDto) {
      return await this.pageService.add(pageDto);
    }
}
