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

@Module({
  imports: [TypeOrmModule.forRoot(DB_CONFIG),
  TypeOrmModule.forFeature([Page,Component,Input])],
  controllers: [AppController,PageController,ComponentController, InputController],
  providers: [AppService,PageService, InputService, ComponentService,],
})
export class AppModule {}
