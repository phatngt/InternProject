import { Component, OnInit } from '@angular/core';
export class Data{
  data:string;
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  label = "Name"
  value: Data;
  constructor() { }

  ngOnInit(): void {
  }
  onKey(event: any){
    this.value.data =  event.target.value;
  }

}
