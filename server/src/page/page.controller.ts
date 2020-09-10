import { Controller, Get, Param, Post, Body, HostParam, Query } from '@nestjs/common';
import { PageService } from './page.service';
import { PageDto } from './interfaces/page.dto';
import {Response} from '../response'
import { Connection } from 'typeorm';

@Controller('page')
export class PageController {

  constructor(
  private pageService: PageService,
  private connection:Connection
  ){}

    @Get('name')
    async getList(@Query('keyword') keyword : string): Promise<any> {
      var response = new Response();
      try {
        let query = this.connection.createQueryRunner();
        let components:Array<any> = await query.query("select c.type from component c where c.page = 'insert'");
        var data:Array<any> = [];
        for(let _index in components){
          
          let queryStatement = "select * from " + components[_index].type;
          let data_temp:Array<any> = await query.query(queryStatement);
          data.push(this.pageService.handleDataOfPage(components[_index].type,data_temp));
        }
        response.data = data;
       } catch (ex) {
        console.log("error: " + ex.message);
        response.error.push(ex.message);
        response.success = false;
       }
      
      return response;
   }
    


    @Post()
    async create(@Body() pageDto: PageDto) {
      console.log(1);
      return await this.pageService.add(pageDto);
    }
}
