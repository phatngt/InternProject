import { Controller, Post, Body } from '@nestjs/common';


import { Emp } from './interface/employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(
        private employeeService: EmployeeService
        ){}

    @Post()
    async postInfo(@Body() info:Emp){
        console.log(1);
        return await this.employeeService.add(info);
        //return info;
    }
}
