import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { InputService } from './input.service';
import {Input} from './input.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Controller('input')
export class InputController {
    constructor(
        private inputService: InputService
       ){}
    @Get('page')
    async getInfoPage(@Query('keyword') keyword): Promise<any>{
        let response  = await this.inputService.findAll(keyword);
        return response;
    }
    @Post()
    async postInfo(@Body() info){
        
    }
}
