import { Component, OnInit, Input } from '@angular/core';
import { TransdataService } from 'src/app/service/transdata.service';
import {ComponentservicesService} from '../service/componentservices.service'
interface ValueCheckbox{
  value:string;
  viewValue:string;
}
interface Data{
  label?:string;
  value?:string;
}
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() data:any;
  check = true;
  listbtn: ValueCheckbox[] = [];
  position;
  checked:boolean;
  constructor(
    private transService:TransdataService,
    private componentServices:ComponentservicesService) { }

  ngOnInit(): void {
    this.listbtn = this.data.value;
    console.log(this.listbtn);
    if(this.data.state == 'checkbox'){
      this.initialDataCheckbox();
      this.checked = (this.data.valueinit == "true");
    }
    if(this.data.state == 'radio'){
      this.position = this.data.valueinit;
    }
  }
  emitCheckboxEvent(){
    var data:Data = {};
    data.label = this.componentServices.handleLabel(this.data.label);
    data.value = String(this.check);
    this.check = !this.check;
    this.transService.transData(data);
  }
  initialDataCheckbox(){
    let data:Data = {};
    data.label = this.componentServices.handleLabel(this.data.label);
    data.value = String(false);
    this.transService.transData(data);
  }
  emitRadioBtnEvent(btnViewValue){
    let data:Data = {};
    data.label = this.data.label;
    data.value = btnViewValue;
    this.transService.transData(data);
  }

}
