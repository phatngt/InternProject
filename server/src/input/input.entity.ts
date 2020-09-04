import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany, ManyToOne } from "typeorm";


@Entity()
export class Input{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    label:string
    @Column()
    placeholder:string
    @Column()
    css:string
    @Column()
    page:string
    @Column()
    location:string;    
}   