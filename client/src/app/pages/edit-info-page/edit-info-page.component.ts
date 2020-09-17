import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, Input} from '@angular/core';
import {LeftDirective} from 'src/app/directive/edit-info-page/left.directive';
import {InfoComponent} from 'src/app/infomation/infocomponents';
import { PagesService } from '../services/pages.service';
import { ClickEmitEventService } from 'src/app/service/click-emit-event.service';
import { EditRightPageDirective } from 'src/app/directive/edit-info-page/edit-right-page.directive';


export interface Emit{
  key?:string;
  value?:any;
  action?:string;
}


@Component({
  selector: 'app-edit-info-page',
  templateUrl: './edit-info-page.component.html',
  styleUrls: ['./edit-info-page.component.css']
})
export class EditInfoPageComponent implements OnInit {

  @ViewChild(EditRightPageDirective,{static:true})
  rightPage:EditRightPageDirective;
  @ViewChild(LeftDirective,{static:true})
  leftPage:LeftDirective;
    
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private pageService: PagesService,
    private emitEventService: ClickEmitEventService,
    private clickEventService: ClickEmitEventService
    ) { }

  ngOnInit(): void {   
    this.recieveData();
  }
  ngAfterViewInit(){
    //this.renderInsertPage();
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
    }
  async renderInsertPage(){
    let data = (await this.pageService.getComponentOfPage("insert"));
    console.log(typeof(data));
    if(data.lenght != 0){
      for(let i=0; i < data.length ; i++){
        if(data[i].data.length === undefined){
          let dataComp = this.mergeData(this.data_temp,data[i].data);
          this.loadComponents(data[i].type,dataComp);
        }
        for(let j = 0; j < data[i].data.length;j++){
          let dataComp = this.mergeData(this.data_temp,data[i].data[j]);
          this.loadComponents(data[i].type,dataComp);
        }
      }
    }  
  }

  mergeData(data_temp,data){
    let dataFinal = data;
    let index = data_temp.findIndex(p=>p.label === dataFinal.label);
    if(index != -1){
      dataFinal.valueinit = this.data_temp[index].value;
    }
    return dataFinal;
    
  }
  @Input() data_temp:Array<any> = [];
  recieveData(){
    this.clickEventService.clickEvent.subscribe(data =>{
      let emit_temp:Emit = data;
      if(emit_temp.action == "update()"){
        this.data_temp = emit_temp.value;
        this.renderInsertPage();
      }
    })
  }
 

}
