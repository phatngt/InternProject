import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { type } from "os";
import Page from "src/page/page.entity";
import Component from "src/component/component.entity";

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