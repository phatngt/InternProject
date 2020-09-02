import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransdataService} from 'src/app/service/transdata.service'
import {DataOfInsertPage} from "src/app/interface/dataofinsertpage"
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() data;
  //label = this.data.label;
  constructor(private transservice: TransdataService) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  onKey(event: any){
    let data:DataOfInsertPage = {};
    data.label = this.data.label;
    data.value = event.target.value;
    this.transservice.transData(data);
  }

}
