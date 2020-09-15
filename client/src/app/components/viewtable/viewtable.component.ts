import { compilePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {ViewtableService} from './viewtable.service'

export interface PeriodicElement {
  id: number;
  First_name: string;
  Last_name: string;
  Email: string;
  Address: string;
  Phone_number: string;
  Gender:string;
  Department:string;
  Permanent_employee:string;

}

@Component({
  selector: 'app-viewtable',
  templateUrl: './viewtable.component.html',
  styleUrls: ['./viewtable.component.css']
})
export class ViewtableComponent implements OnInit {
  @Input() data:any;
  dataSource: MatTableDataSource<PeriodicElement>;
  lengthDataSrc:number;
  displayedColumns:string[] = [];
  columnsToDisplay:Array<any> = []
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private viewTableService:ViewtableService) { 
  }
  
  ngOnInit(): void {
    this.renderTable();
  }
  async renderTable(){
    let element_data:PeriodicElement[] = await this.viewTableService.getDataDetails(this.data.state);
    let listColunms:Object = Object.keys(element_data[0]);
    for(let i in listColunms){
      this.displayedColumns.push(listColunms[i]);
    }
    this.displayedColumns.push(" ");
    this.columnsToDisplay = this.displayedColumns;
    this.dataSource = new MatTableDataSource(element_data);
    this.lengthDataSrc = Object.keys(this.dataSource).length;
    this.dataSource.paginator = this.paginator;
    
  }
  clickIcon(){
    
  }

  

}
