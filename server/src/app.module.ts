import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_CONFIG } from 'db.config';
import Page from './page/page.entity';
import { PageController } from './page/page.controller';
import { PageService } from './page/page.service';
import { ComponentController } from './component/component.controller';
import Component from './component/component.entity';

@Module({
  imports: [TypeOrmModule.forRoot(DB_CONFIG),
  TypeOrmModule.forFeature([Page,Component])],
  controllers: [AppController,PageController,ComponentController],
  providers: [AppService,PageService,],
})
export class AppModule {}
