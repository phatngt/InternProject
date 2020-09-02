import { Controller, Get, Param, Post, Body, HostParam, Query } from '@nestjs/common';
import { PageService } from './page.service';
import { PageDto } from './interfaces/page.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import Page from './page.entity';
import {Response} from '../response'
import { InputService } from 'src/input/input.service';
import { type } from 'os';
import { Connection } from 'typeorm';

@Controller('page')
export class PageController {

  constructor(@InjectRepository(Page)
  private pageRepository: Repository<Page>,
  private readonly pageService: PageService,
  private connection:Connection
  ){

  }
  

    @Get()
     async findOne(@Query('id') id : number): Promise<any> {
       var response = new Response();
      //  try {
      //   let query = this.connection.createQueryRunner();
      //   let data = await query.query("select getdataofpage('insert')");
      //   response.data = this.pageService.handleDataOfPage(data);

      //  } catch (ex) {
      //   console.log("error: " + ex.message);
      //   response.error.push(ex.message);
      //   response.success = false;
      //  }
      return response;
    }


    @Get('name')
    async getList(@Query('keyword') keyword : string): Promise<any> {
      var response = new Response();
      // try {
      //   let dataOfPageTable;
      //   var query = this.pageRepository.createQueryBuilder("page")
      //   if(keyword){
      //     query = query.where('page.name = :name',{name: keyword}).leftJoinAndSelect("page.components","name_page");
      //     dataOfPageTable = await query.getMany();
      //     response.data = dataOfPageTable;
      //   }
      //   if(dataOfPageTable){ 
      //     let typeComponent = this.pageService.handleDataFromPageTable(dataOfPageTable);
      //     response.data = typeComponent;

      //   }
      //   } catch (ex) {
      //     console.log("error: " + ex.message);
      //     response.error.push(ex.message);
      //     response.success = false;
      //   }
      try {
        let query = this.connection.createQueryRunner();
        let queryStatement  = "select getdataofpage('"+keyword+"')";
        let data = await query.query(queryStatement);
        response.data = this.pageService.handleDataOfPage(data);

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
