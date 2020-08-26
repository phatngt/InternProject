import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { type } from 'os';
import Component from 'src/component/component.entity';

@Entity()
export class Page {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany(type=>Component,component=>component.name_page)
  components: Component[]
}


export default Page;