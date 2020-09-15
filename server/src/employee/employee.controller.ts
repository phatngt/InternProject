import { Controller, Post, Body, Get, Query } from '@nestjs/common';


import { Emp } from './interface/employee.dto';
import { EmployeeService } from './employee.service';
import { Response } from 'src/response';
import { Connection } from 'typeorm';

@Controller('employee')
export class EmployeeController {
    constructor(
        private employeeService: EmployeeService,
        private connection: Connection
        ){}
    
    @Get()
    async getData(){
        var response = new Response();
        try {
            let query = this.connection.createQueryRunner();
            response.data = await query.query(`select * from employee`);
        } catch (ex) {
            console.log("error: " + ex.message);
            response.error.push(ex.message);
            response.success = false;
        }
        return response;
    }




    @Post()
    async postInfo(@Body() info:Emp){
        console.log(1);
        return await this.employeeService.add(info);
        //return info;
    }
}
