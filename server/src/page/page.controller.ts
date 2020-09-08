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
        let queryStatement  = "select getdataofpage('"+keyword+"')";
        let data = await query.query(queryStatement);
        response.data = this.pageService.handleDataOfPage(data);
        //response.data = data;
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
