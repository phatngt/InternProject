import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Component from './component.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComponentService {
     constructor(
        @InjectRepository(Component)
        private componentRepository: Repository<Component>
        ){}
     queryDataComponentResponePage(name_page,type_component){
         let query = this.componentRepository.createQueryBuilder("component");
         if(name_page && type_component){
             query = query.where("component.type = :name",{name: type_component})
                          //.leftJoinAndSelect("component.input_pages")
         }
     }
}
