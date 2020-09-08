import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TransdataService } from 'src/app/service/transdata.service';

interface Option{
  value:string;
  viewValue:string;
}
interface Data{
  label?:string;
  value?:string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  constructor(private transService: TransdataService) { }
  @Input() data;
  infoOption: Option[]; 
 
  ngOnInit(): void {
    this.infoOption= this.data.option;
  }
  emitEvent(event){
    console.log(typeof(event.value));
    let data:Data = {}
    data.label = this.data.label;
    data.value = event.value;
    this.transService.transData(data);
  }

}
