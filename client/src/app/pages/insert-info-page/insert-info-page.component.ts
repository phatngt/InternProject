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
  }

  loadComponents(name:string,data:any){
    const components = new InfoComponent();
    const component =  components.getComponents(name);
    //console.log(component);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef  = this.pageInsert.viewContainerRef; 
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.label = data;
    componentRef.instance.output.subscribe(event => console.log(event));
  }
  async getInsertPageComponent(){
    //let data = (await this.pageService.getComponentOfPage("insert"));
    let list = [{type:"input",label:"First name"},{type:"input",label:"Last name"}]
    for(let i=0; i < list.length ; i++){
      this.loadComponents(list[i].type,list[i].label);
    }
  }
  value;
  collectData(value){
  }
  viewData(event:any){
    console.log(event.target.value);
  }

  

}
