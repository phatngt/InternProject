import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnChanges, ContentChildren, QueryList } from '@angular/core';
import { AppDirective } from 'src/app/directive/app.directive';
import {InfoComponent} from 'src/app/infocomponents/infocomponents'
import {TransdataService} from 'src/app/service/transdata.service'
import { __values } from 'tslib';
@Component({
  selector: 'app-insert-info-page',
  templateUrl: './insert-info-page.component.html',
  styleUrls: ['./insert-info-page.component.css']
})
export class InsertInfoPageComponent implements OnInit,OnChanges {

  @ViewChild(AppDirective,{static:true}) 
  pageInsert: AppDirective;

  componentRef = []
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private service: TransdataService,
    ) { }
  ngOnChanges(){
    this.viewData();
  }

  ngOnInit(): void {
    //this.loadComponents();
    this.getInsertPageComponent();
    //this.viewData();
  }

  loadComponents(name:string){
    const components = new InfoComponent();
    const component =  components.getComponents(name);
    //console.log(component);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef  = this.pageInsert.viewContainerRef; 
    this.componentRef.push(viewContainerRef.createComponent(componentFactory));
  }
  async getInsertPageComponent(){
    //let data = (await this.pageService.getComponentOfPage("insert"));
    let list = [{type:"input",label:"First name"},{type:"input",label:"Last name"}]
    for(let i=0; i < list.length ; i++){
      this.loadComponents(list[i].type);
      this.componentRef[i].instance.label = list[i].label;
    }
  }
  collectData(value){
    console.log(value)
  }
  viewData(){
    console.log(this.service.currentData.source);
  }

  

}
