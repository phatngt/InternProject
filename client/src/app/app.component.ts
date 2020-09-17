import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ClickEmitEventService } from './service/click-emit-event.service';
import {RootDirective} from 'src/app/directive/app-page/root.directive';
import {InfoRootPage} from '../app/infomation/inforootpage';
import { TranscontrolService } from './service/transcontrol.service';

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
  listPage:Array<any> = []
  @ViewChild(RootDirective,{static:true})
  rootPage: RootDirective;
  _name_page = '';
  constructor(
    private clickEventService: ClickEmitEventService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private transControlService: TranscontrolService){}

  ngOnInit():void{
    this.handleEventDisplay();
    this.loadPage();
    this.handleSignControl();
  }

  handleEventDisplay(){
    this.clickEventService.clickEvent.subscribe(emit=>{
      let emitEvent:Emit = emit;
      if(emitEvent.action == "update()"){
        this.loadPage(emitEvent.key,emitEvent.value);
      }
    })
  }
  loadPage(_name?:string,data_page?:any){
    let renderPage  = this.listPage.pop()
    if(renderPage !== undefined){
      renderPage.clear();
    }
    const info = new InfoRootPage();
    const page = info.getPage(_name);
    console.log(page);
    var componentFactory = this.componentFactoryResolver.resolveComponentFactory(page);
    const viewContainerRef  = this.rootPage.viewContainerRef;
    const componentRef  = viewContainerRef.createComponent(componentFactory);
    if(data_page !== undefined){
      componentRef.instance.date_temp = data_page;
    }
    this.listPage.push(viewContainerRef);
  }

  handleSignControl(){
    this.clickEventService.clickEvent.subscribe(emit=>{
      if(emit == "create()"){
        console.log(1);
        this.loadPage("insert-page");
      }
      if(emit == "cancel()"){
        this.loadPage();
      }
    })
  }
 
}
