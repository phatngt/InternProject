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

  // handleDataOfPage(data: any){
  //   let values = Object.values(data[0])[0] as Array<any>;
  //   var result = [];
  //   var isFinal = false;
  //   var name_type_current:string;
  //   var name_type_past:string;
    
  //   var dataColectionArr = [];
  //   values.forEach(function(value:string){
  //     let array_element = value.split(",");
  //     if(values[values.length-1] === value) isFinal = true;
  //     var dataCollection = {};
  //     array_element.forEach(function(ele){
  //       let element = ele.split(':');
  //       let object = {};
  //       if(element[0].trim() === 'action'.trim()){
  //         element[1] = element[1]+'()';
  //       }
  //       object[element[0].trim()] = element[1].trim();
        
  //       if(element[0].trim() === 'type'.trim()){
  //         name_type_current = element[1];
  //       }
  //       else 
  //         dataCollection = Object.assign(dataCollection,object);
  //     })
  //     if(isFinal){
  //       if(name_type_past === name_type_current){
  //         dataColectionArr.push(dataCollection);
  //       }
  //       else {
  //         let type ={};
  //         let data = {};
  //         type['type'.trim()] = name_type_current;
  //         data['data'.trim()] = dataCollection;
  //         result.push(Object.assign(type,data));
  //       }
  //     }
      
  //     if((name_type_past !== name_type_current && values[0] !== value)||isFinal){
  //       if(isFinal){
  //          isFinal = false;
  //       }

  //       let type ={};
  //       let data = {};
  //       type['type'.trim()] = name_type_past;
  //       data['data'.trim()] = dataColectionArr;
  //       result.push(Object.assign(type,data));
  //       dataColectionArr = [];
  //     }
  //     dataColectionArr.push(dataCollection);
  //     name_type_past = name_type_current;
  //   })
  
  //   return result;
  // }

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
      array_element.forEach(function(ele){
        var element = [] ;
        
        console.log(ele);
        if(ele.search('{') != -1){
          element[0] = ele.substring(0,ele.indexOf('{')-1);
          let valueOptions = (ele.substring(ele.indexOf('{')+1,ele.length-1).split(";"));
          var listOptions = [];
          valueOptions.forEach(val =>{
            let valArr = val.split(':');
            let keyOption = {}
            let valueOption = {}
            keyOption["viewValue"] = valArr[0].trim();
            valueOption["value"] = valArr[1].trim();
            listOptions.push(Object.assign(keyOption,valueOption));
          })
          element[1] = listOptions;
        }
        else{
          element = ele.split(':');
        }
        let object = {};
        if(element[0].trim() === 'action'.trim()){
          element[1] = element[1]+'()';
        }
        object[element[0].trim()] = element[1];
        
        if(element[0].trim() === 'type'.trim()){
          name_type_current = element[1];
        }
        else 
          dataCollection = Object.assign(dataCollection,object);
      })
      if(isFinal){
        if(name_type_past === name_type_current){
          dataColectionArr.push(dataCollection);
        }
        else {
          let type ={};
          let data = {};
          type['type'.trim()] = name_type_current;
          data['data'.trim()] = dataCollection;
          result.push(Object.assign(type,data));
        }
      }
      
      if((name_type_past !== name_type_current && values[0] !== value)||isFinal){
        if(isFinal){
           isFinal = false;
        }

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