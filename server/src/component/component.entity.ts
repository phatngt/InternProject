import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';


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