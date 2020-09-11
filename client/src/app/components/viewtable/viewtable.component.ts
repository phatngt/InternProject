import { Component, OnInit, Input } from '@angular/core';


export interface PeriodicElement {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  phone_num: string;
}

@Component({
  selector: 'app-viewtable',
  templateUrl: './viewtable.component.html',
  styleUrls: ['./viewtable.component.css']
})
export class ViewtableComponent implements OnInit {
  @Input() data:any;
  constructor() { }
  dataSource;
  displayedColumns:string[] = [];
  columnsToDisplay:Array<any> = []
  ngOnInit(): void {
    this.renderTable();
  }

  renderTable(){
    let element_data:PeriodicElement[] = this.data;
    let listColunms:Object = Object.keys(this.data[0]);
    for(let i in listColunms){
      this.displayedColumns.push(listColunms[i]);
    }
    this.columnsToDisplay = this.displayedColumns;
    this.dataSource = element_data;
    // console.log(this.dataSource);
  }

  

}
