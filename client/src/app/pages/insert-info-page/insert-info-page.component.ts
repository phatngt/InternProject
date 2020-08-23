import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AppDirective } from 'src/app/directive/app.directive';
import {InfoComponent} from 'src/app/infocomponents/infocomponents'
@Component({
  selector: 'app-insert-info-page',
  templateUrl: './insert-info-page.component.html',
  styleUrls: ['./insert-info-page.component.css']
})
export class InsertInfoPageComponent implements OnInit {

  @ViewChild(AppDirective,{static:true}) 
  pageInsert: AppDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponents("input");
  }

  loadComponents(name:string){
    const components = new InfoComponent();
    const component =  components.getComponents(name);
    console.log(component);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef  = this.pageInsert.viewContainerRef; 
    const componentRef = viewContainerRef.createComponent(componentFactory);
    
  }

}
