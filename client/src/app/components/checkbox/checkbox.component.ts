import { Component, OnInit, Input } from '@angular/core';
import { TransdataService } from 'src/app/service/transdata.service';
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
  constructor(private transService:TransdataService) { }

  ngOnInit(): void {
    this.listbtn = this.data.value;
  }
  emitCheckboxEvent(){
    let dataCheckbox:ValueCheckbox[] = this.data.value;
    let data:Data = {};
    data.label = dataCheckbox[0].viewValue;
    data.value = String(this.check);
    this.check = !this.check;
    this.transService.transData(data);
  }
  emitRadioBtnEvent(btnViewValue){
    let data:Data = {};
    data.label = 'Gender';
    data.value = btnViewValue;
    this.transService.transData(data);
  }

}
