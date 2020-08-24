import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Component {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
  
  @Column()
  name_page:string;

  // @Column({ default: true })
  // delete_flag: boolean;
}


export default Component;