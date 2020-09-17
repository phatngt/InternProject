import { Component, OnInit, ViewChild, ComponentFactoryResolver, AfterViewInit, ViewContainerRef, ComponentRef, ComponentFactory } from '@angular/core';
import { AppDirective } from 'src/app/directive/insert-page/left.directive';
import {InfoComponent} from 'src/app/infomation/infocomponents'
import {TransdataService} from 'src/app/service/transdata.service'
import {DataOfInsertPage} from "src/app/interface/dataofinsertpage"
import {PagesService} from 'src/app/pages/services/pages.service'
import { ClickEmitEventService } from 'src/app/service/click-emit-event.service';
import { RightDirective } from 'src/app/directive/insert-page/right.directive';
import { Emit } from 'src/app/app.component';
import { TransdatatoappService } from 'src/app/service/transdatatoapp.service';
@Component({
  selector: 'app-insert-info-page',
  templateUrl: './insert-info-page.component.html',
  styleUrls: ['./insert-info-page.component.css']
})
export class InsertInfoPageComponent implements OnInit,AfterViewInit {
  //Virw child partion
  @ViewChild(AppDirective,{static:true}) 
  leftPage: AppDirective;
  //leftPage: QueryList<AppDirective>;
  @ViewChild(RightDirective,{static:true})
  rightPage:RightDirective;
  bool:boolean = false;
  dataOfPage = [];
  arrayComponent:ComponentFactory<any>[] = [];
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private transservice: TransdataService,
    private pageService: PagesService,
    private emitEventService: ClickEmitEventService,
    private transDataToAnotherComponent: TransdatatoappService
    ) { }

  ngOnInit(): void {
    
    this.recieveClickEvent();
    this.collectData();
    
  }
  ngAfterViewInit(){
    this.renderInsertPage();
  }
  loadComponents(name_component:string,data:any){
    const components = new InfoComponent();
    const component =  components.getComponents(name_component);
    var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    var viewContainerRef:ViewContainerRef;
    if(data.location.position == 'col-1'){
      viewContainerRef = this.leftPage.viewContainerRef;
    }
    if(data.location.position == 'col-2'){
       viewContainerRef = this.rightPage.viewContainerRef;
    }
    const componentRef  = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = data;
    this.arrayComponent.push(componentFactory);
    }
  async renderInsertPage(){
    let data = (await this.pageService.getComponentOfPage("insert"));
    if(data.lenght != 0){
      for(let i=0; i < data.length ; i++){
        if(data[i].data.length === undefined){
          this.loadComponents(data[i].type,data[i].data);
        }
        for(let j = 0; j < data[i].data.length;j++){
          this.loadComponents(data[i].type,data[i].data[j]);
        }
      }
    }  
  }

  collectData(){
    this.transservice.transdata.subscribe(data=>{
      let info:DataOfInsertPage = data;
      console.log(info.label);
      let index = this.dataOfPage.findIndex(p=>p.label === info.label)
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
      let emit:Emit = data;
      if(emit.action == "update()"){
        
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
    this.pageService.postInfoEmployee(info).subscribe(data=>{this.check = data});
  }

}
