import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {
  @Input() data:any;
  labelGender: 'male' | 'female' = 'male';
  constructor() { }

  ngOnInit(): void {
  }

}
