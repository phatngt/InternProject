import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TransdataService} from 'src/app/service/transdata.service';
import {DataOfInsertPage} from 'src/app/interface/dataofinsertpage';
import { ComponentservicesService } from '../service/componentservices.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit,OnChanges {

  @Input() data;
  date:FormControl;
  dataFormat = [0,0,0];
  constructor(
    private transservice: TransdataService,
    private componentServices: ComponentservicesService
    ) { }

  ngOnChanges():void{
    
  }
  ngOnInit(): void {
    if(this.data.valueinit != null && this.data.state == 'datepicker'){
      let dateEle:Array<string> = this.data.valueinit.split('-');
      let index = 0;
      dateEle.forEach(p=>{
        this.dataFormat[index++] = Number.parseInt(p);
      })
      console.log(typeof(this.dataFormat));
      console.log(this.dataFormat);
      this.date = new FormControl(new Date( this.dataFormat[2],
                                            this.dataFormat[1]-1,
                                            this.dataFormat[0]));
    }
   

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
