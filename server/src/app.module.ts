import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_CONFIG } from 'db.config';
import Page from './page/page.entity';
import { PageController } from './page/page.controller';
import { PageService } from './page/page.service';
import { ComponentController } from './component/component.controller';
import { InputController } from './input/input.controller';
import { InputService } from './input/input.service';
import { ComponentService } from './component/component.service';
import Component from './component/component.entity';
import { Input } from './input/input.entity';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { Employee } from './employee/employee.entity';

@Module({
  imports: [TypeOrmModule.forRoot(DB_CONFIG),
  TypeOrmModule.forFeature([Page,Component,Input,Employee])],
  controllers: [AppController,PageController,ComponentController, InputController, EmployeeController],
  providers: [AppService,PageService, InputService, ComponentService, EmployeeService,],
})
export class AppModule {}
