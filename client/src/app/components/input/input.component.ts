import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
export class Data{
  data:string;
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label = ""
  @Output() newInfoItem = new EventEmitter<any>();

  data = new Observable(observer =>{
    
  });

  constructor() { }

  ngOnInit(): void {
  }
  value;
  onKey(event: any){
    this.newInfoItem.emit(event);
    console.log(event)
    this.value = event.target.value;
  }
}
