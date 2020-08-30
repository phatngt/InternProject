import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Input } from './input.entity';
import { Repository } from 'typeorm';
import {Response} from '../response'

@Injectable()
export class InputService {
    constructor(
        @InjectRepository(Input)
        private inputRepository: Repository<Input>,
    ){}

    async findAll(name_page):Promise<any>{
        var response = new Response();
        var query = this.inputRepository.createQueryBuilder("InputTable");
        try {
            query = query.where('InputTable.page like :page',{page: name_page})
            response.data = await query.getMany();
        } catch (ex) {
            console.log("error" + ex);
            response.error.push(ex);
            response.success = false;
        }
        return response;
      }
    
    //   async findOne(id: string) {
        
    //     return this.inputRepository.findOne(id);
    //   }
    
    //   async remove(id: string): Promise<void> {
    //     await this.inputRepository.delete(id);
    //   }
    
    //   async add(pageDto : PageDto): Promise<Page>{
    //     return this.inputRepository.save(pageDto);
    //   }
}
