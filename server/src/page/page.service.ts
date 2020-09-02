import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Page from './page.entity';
import { PageDto } from './interfaces/page.dto';
import { type } from 'os';


@Injectable()
export class PageService {
  constructor(
    @InjectRepository(Page)
    private pageRepository: Repository<Page>,
  ) {}

  findAll(): Promise<Page[]> {
    return this.pageRepository.find();
  }

  async findOne(id: string) {
    
    return this.pageRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.pageRepository.delete(id);
  }

  async add(pageDto : PageDto): Promise<Page>{
    return this.pageRepository.save(pageDto);
  }
  
  handleDataFromPageTable(data:any){
    let dataComponent = data[0].components;
    let listTypeComponent = [];
    for(let i = 0 ; i < dataComponent.length; i++){
      listTypeComponent.push(dataComponent[i].type);
    }
    return listTypeComponent
  }

  handleDataOfPage(data: any){
    let values = Object.values(data[0])[0] as Array<any>;
    var result = [];
    var isFinal = false;
    var name_type_current:string;
    var name_type_past:string;
    
    var dataColectionArr = [];
    values.forEach(function(value:string){

      let array_element = value.split(",");
      if(values[values.length-1] === value) isFinal = true;
      var dataCollection = {};
      array_element.forEach(function(value){
        let element = value.split(':');
        let object = {};
        object[element[0].trim()] = element[1].trim();
        if(element[0].trim() === 'type'.trim()){
          name_type_current = element[1];
        }
        else
          dataCollection = Object.assign(dataCollection,object);
      })
      if(isFinal) dataColectionArr.push(dataCollection);
      if((name_type_past !== name_type_current && values[0] !== value)||isFinal){
        if(isFinal) isFinal = false;
        let type ={};
        let data = {};
        type['type'.trim()] = name_type_past;
        data['data'.trim()] = dataColectionArr;
        result.push(Object.assign(type,data));
        dataColectionArr = [];
      }
      dataColectionArr.push(dataCollection);
      name_type_past = name_type_current;
    })
    
    
    return result;
  }
}