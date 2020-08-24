import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnChanges } from '@angular/core';
import { AppDirective } from 'src/app/directive/app.directive';
import {InfoComponent} from 'src/app/infocomponents/infocomponents'
import {PagesService} from '../services/pages.service'
import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
  selector: 'app-insert-info-page',
  templateUrl: './insert-info-page.component.html',
  styleUrls: ['./insert-info-page.component.css']
})
export class InsertInfoPageComponent implements OnInit,OnChanges {

  @ViewChild(AppDirective,{static:true}) 
  pageInsert: AppDirective;

  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private pageService: PagesService
    ) { }
  ngOnChanges(){
    
  }

  ngOnInit(): void {
    //this.loadComponents();
    this.getInsertPageComponent();
    this.viewInfo();
  }

  loadComponents(name:string,data:any){
    const components = new InfoComponent();
    const component =  components.getComponents(name);
    //console.log(component);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef  = this.pageInsert.viewContainerRef; 
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.label = data;
  }
  async getInsertPageComponent(){
    //let data = (await this.pageService.getComponentOfPage("insert"));
    let list = [{type:"input",label:"First name"},{type:"input",label:"Last name"}]
    for(let i=0; i < list.length ; i++){
      this.loadComponents(list[i].type,list[i].label);
    }
  }

  info = ["sad"];
  addItems(data:string){
    console.log(data);
  }
  async viewInfo(){
    console.log(this.info);
  }

}
