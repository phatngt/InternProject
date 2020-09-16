import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickEmitEventService } from './service/click-emit-event.service';
import {RootDirective} from 'src/app/directive/app-page/root.directive';
import {InfoRootPage} from '../app/infomation/inforootpage';

export interface Emit{
  key?:string;
  value?:any;
  action?:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "client";
  @ViewChild(RootDirective,{static:true})
  rootPage: RootDirective;
  _name_page = '';
  constructor(
    private clickEventService: ClickEmitEventService){}

  ngOnInit():void{
    this.handleEventDisplay();
  }

  handleEventDisplay(){
    this.clickEventService.clickEvent.subscribe(emit=>{
      let emitEvent:Emit = emit; 
      if(emitEvent.action == "update()"){
        this.renderPage(emitEvent.key,emitEvent.value);
      }
    })
  }
  loadPage(_name:string,data_page:any){
    const info = new InfoRootPage();
    const page = info.getPage(_name);
  
  }

  renderPage(_name_page,data){
    this.loadPage(_name_page,data);
  }



}
