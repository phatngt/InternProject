import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository} from 'typeorm';
import { Emp } from './interface/employee.dto';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,){}

    async add(info: Emp): Promise<Employee>{
        console.log(1);
        return this.employeeRepository.save(info);
      }
}
