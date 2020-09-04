import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnChanges, ContentChildren, QueryList, Input, SimpleChanges, AfterViewInit, ViewContainerRef } from '@angular/core';
import { AppDirective } from 'src/app/directive/app.directive';
import {InfoComponent} from 'src/app/infocomponents/infocomponents'
import {TransdataService} from 'src/app/service/transdata.service'
import {DataOfInsertPage} from "src/app/interface/dataofinsertpage"
import {PagesService} from 'src/app/pages/services/pages.service'
import { verifyHostBindings } from '@angular/compiler';
import { ClickEmitEventService } from 'src/app/service/click-emit-event.service';
@Component({
  selector: 'app-insert-info-page',
  templateUrl: './insert-info-page.component.html',
  styleUrls: ['./insert-info-page.component.css']
})
export class InsertInfoPageComponent implements OnInit,OnChanges,AfterViewInit {
  //Virw child partion
  @ViewChild(AppDirective,{static:true}) 
  pageInsert:AppDirective;
  dataOfPage = [];
  @Input() condition:boolean = true;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private transservice: TransdataService,
    private pageService: PagesService,
    private emitEventService: ClickEmitEventService,
    ) { }

  ngOnChanges():void{
  }
  ngOnInit(): void {
    
    this.recieveClickEvent();
    this.collectData();
    console.log(this.pageInsert);
  }
  ngAfterViewInit(){
    console.log(this.pageInsert);
    this.renderInsertPage();
  }
  loadComponents(name_component:string,data:any,bool){
    const components = new InfoComponent();
    const component =  components.getComponents(name_component);
    var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    //const  viewContainerRef  = this.pageInsert.viewContainerRef;
    const viewContainerRef = this.pageInsert.viewContainerRef;
    console.log(viewContainerRef)
    const componentRef  = viewContainerRef.createComponent(componentFactory);
    console.log(componentRef);
    componentRef.instance.data = data;
    }
  
  async renderInsertPage(){
    let data = (await this.pageService.getComponentOfPage("insert"));
    console.log(data);
    for(let i=0; i < data.length ; i++){
      console.log(1);
      for(let j = 0; j < data[i].data.length;j++){
        let bool = true;
        if(j%2 ==0 ) bool = false;
        this.loadComponents(data[i].type,data[i].data[j],bool);
      }
    }
      //console.log(data[i].data.length);     
  }

  collectData(){
    this.transservice.transdata.subscribe(data=>{
      let info:DataOfInsertPage = data;
      console.log(info.label);
      let index = this.dataOfPage.findIndex(p=>p.label === info.label)
      console.log(index)
      if(index !=-1){
        this.dataOfPage[index].value = info.value;
      }
      else{
        this.dataOfPage.push(info);
      }
      console.log(this.dataOfPage)
    });
  }

  recieveClickEvent(){
    this.emitEventService.clickEvent.subscribe(data=>{
      if(data == 'submit()'){
        this.postInfoEmployee();
      }
    })
  }

  handleInfoEmp(){
    let data = this.dataOfPage;
    var infoEmp :Object = {};
    data.forEach(p=>{
      let object = {};
      object[p.label.trim()] = p.value.trim();
      console.log(object);
      infoEmp = Object.assign(infoEmp,object);
    })
    return infoEmp;
  }
  check;
  postInfoEmployee(){
    let info = this.handleInfoEmp();
    console.log(info);
    this.pageService.postInfoEmployee(info).subscribe(data=>{this.check = data});
  }

}
