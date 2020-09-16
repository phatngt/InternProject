import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TransdataService} from 'src/app/service/transdata.service';
import {DataOfInsertPage} from 'src/app/interface/dataofinsertpage';
import { ComponentservicesService } from '../service/componentservices.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit,OnChanges {

  @Input() data;
  //label = this.data.label;
  constructor(
    private transservice: TransdataService,
    private componentServices: ComponentservicesService
    ) { }

  ngOnChanges():void{
    
  }
  ngOnInit(): void {
  }
  onKey(event: any){
    let data:DataOfInsertPage = {};
    data.label = this.componentServices.handleLabel(this.data.label);
    data.value = event.target.value;
    this.transservice.transData(data);
  }
  emitDatePickerEvent(event:any){
    let datePicker:DataOfInsertPage = {};
    datePicker.label = this.componentServices.handleLabel(this.data.label);
    let dateFormat = event.getDate() + '-' + (event.getMonth() + 1) + '-' + event.getFullYear();
    datePicker.value = dateFormat;
    this.transservice.transData(datePicker);
  }
  
}
