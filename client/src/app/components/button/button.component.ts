import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  name_button = 'Button';
  @Output() newEmitEvent = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  funcEvent(){
    this.newEmitEvent.emit();
  }

}
