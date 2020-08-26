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

  @ManyToOne(type=>Page,page=>page.components)
  name_page:Page

  @OneToMany(type=>Input,input=>input.pages)
  input_page:Input[]
  // @Column({ default: true })
  // delete_flag: boolean;
}


export default Component;