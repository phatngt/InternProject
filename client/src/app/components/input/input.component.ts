import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  label = "Name"
  value;
  constructor() { }

  ngOnInit(): void {
  }
  onKey(event: any){
    this.value =  event.target.value;
  }

}
