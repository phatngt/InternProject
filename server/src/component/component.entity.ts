import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { type } from 'os';
import Page from 'src/page/page.entity';
import { Input } from 'src/input/input.entity';

@Entity()
export class Component {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  page:string;
 
 
  // @Column({ default: true })
  // delete_flag: boolean;
}


export default Component;