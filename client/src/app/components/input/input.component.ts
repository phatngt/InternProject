<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
export class Data{
  data:string;
}
=======
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

>>>>>>> c09aebaed45f71a8f7e722114f33203b24aeb639
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
<<<<<<< HEAD
  label = "Name"
  value: Data;
=======
  @Input() label = "Name"
  @Output() newInfoItem = new EventEmitter<string>();
>>>>>>> c09aebaed45f71a8f7e722114f33203b24aeb639
  constructor() { }

  ngOnInit(): void {
  }
  onKey(event: any){
<<<<<<< HEAD
    this.value.data =  event.target.value;
=======
    this.newInfoItem.emit(event);
    console.log(event)
>>>>>>> c09aebaed45f71a8f7e722114f33203b24aeb639
  }

}
