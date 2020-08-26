import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Page from './page.entity';
import { PageDto } from './interfaces/page.dto';
import Component from 'src/component/component.entity';
import { InputService } from 'src/input/input.service';

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
}