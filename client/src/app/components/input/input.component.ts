import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label = "Name"
  @Output() newInfoItem = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onKey(event: any){
    this.newInfoItem.emit(event);
    console.log(event)
  }

}
