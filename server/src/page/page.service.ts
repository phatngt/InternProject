import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Page from './page.entity';
import { PageDto } from './interfaces/page.dto';

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
}