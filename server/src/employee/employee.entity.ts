import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    First_name:string
    @Column()
    Last_name:string
    @Column()
    Birthday:string;
    @Column()
    Email:string
    @Column()
    Address:string
    @Column()
    Phone_number:string;
    @Column()
    Gender: string;
    @Column()
    Department:string;
    @Column()
    Permanent_employee:string;



}