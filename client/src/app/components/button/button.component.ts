import { Component, OnInit, Input} from '@angular/core';
import { ClickEmitEventService} from 'src/app/service/click-emit-event.service'
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() data:any;
  constructor(private clickEmitEvent: ClickEmitEventService ) { }

  ngOnInit(): void {
  }
  emitEvent(){
    console.log(this.data.action);
    this.clickEmitEvent.click(this.data.action);
  }

}
