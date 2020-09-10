import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TransdataService} from 'src/app/service/transdata.service';
import {DataOfInsertPage} from 'src/app/interface/dataofinsertpage';
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
    ) { }

  ngOnChanges():void{
    
  }
  ngOnInit(): void {
  }
  onKey(event: any){
    let data:DataOfInsertPage = {};
    let label:Array<String> = this.data.label.split(' ');
    if(label.length > 1) data.label = label[0]+'_'+label[1];
    else data.label = this.data.label;
    data.value = event.target.value;
    this.transservice.transData(data);
  }
  emitDatePickerEvent(event:any){
    let datePicker:DataOfInsertPage = {};
    let label:Array<String> = this.data.label.split(' ');
    if(label.length > 1) datePicker.label = label[0]+'_'+label[1];
    else datePicker.label = this.data.label;
    let dateFormat = event.getDate() + '-' + (event.getMonth() + 1) + '-' + event.getFullYear();
    datePicker.value = dateFormat;
    this.transservice.transData(datePicker);
  }
  
}
