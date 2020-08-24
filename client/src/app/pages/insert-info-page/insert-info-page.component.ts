import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AppDirective } from 'src/app/directive/app.directive';
import {InfoComponent} from 'src/app/infocomponents/infocomponents'
import {PagesService} from '../services/pages.service'
@Component({
  selector: 'app-insert-info-page',
  templateUrl: './insert-info-page.component.html',
  styleUrls: ['./insert-info-page.component.css']
})
export class InsertInfoPageComponent implements OnInit {

  @ViewChild(AppDirective,{static:true}) 
  pageInsert: AppDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private pageService: PagesService
    ) { }

  ngOnInit(): void {
    //this.loadComponents();
  }

  loadComponents(name:string,data:any){
    const components = new InfoComponent();
    const component =  components.getComponents(name);
    console.log(component);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef  = this.pageInsert.viewContainerRef; 
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
  async getInsertPageComponent(){
    let data = (await this.pageService.getComponentOfPage("insert"));
    for(let i=0; i < data.length ; i++){
      
    }
  }

}
