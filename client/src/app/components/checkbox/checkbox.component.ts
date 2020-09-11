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
    var data:Data = {};
    let label:Array<any> = this.data.label.split(' ');
    data.label = '';
    if(label.length > 0){
      for(let _index in label){
        if(+_index !== (label.length-1) ){
          data.label = label[_index] + '_';
        }
        else{
          data.label += label[_index];
        }
      }
    }
    else{
      data.label = this.data.label;
    }
    
    data.value = String(this.check);
    this.check = !this.check;
    this.transService.transData(data);
  }
  emitRadioBtnEvent(btnViewValue){
    let data:Data = {};
    data.label = this.data.label;
    data.value = btnViewValue;
    this.transService.transData(data);
  }

}
