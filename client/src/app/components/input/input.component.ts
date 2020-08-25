import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransdataService} from 'src/app/service/transdata.service'
export class Data{
  data:string;
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label = " "
  

  constructor(private service: TransdataService) { }

  ngOnInit(): void {
  }
  onKey(event: any){
    this.service.changeData(event.target.value);
    return event.target.value;
  }

}
