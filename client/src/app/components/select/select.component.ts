import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TransdataService } from 'src/app/service/transdata.service';
import { FormControl} from '@angular/forms'
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
  selected:FormControl;
 
  ngOnInit(): void {
    this.infoOption= this.data.option;
    this.selected = new FormControl(this.data.valueinit);
  }

  


  emitEvent(event){
    let data:Data = {}
    data.label = this.data.label;
    data.value = event.value;
    this.transService.transData(data);
  }

}
