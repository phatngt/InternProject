import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Input } from './input.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InputService {
    constructor(
        @InjectRepository(Input)
        private inputRepository: Repository<Input>,
    ){}

    // findAll(): Promise<Input[]> {
    //     return this.inputRepository.find();
    //   }
    
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
