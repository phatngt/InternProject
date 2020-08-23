import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AppDirective } from 'src/app/directive/app.directive';
import {InfoComponent} from 'src/app/infocomponents/infocomponents'
@Component({
  selector: 'app-insert-info-page',
  templateUrl: './insert-info-page.component.html',
  styleUrls: ['./insert-info-page.component.css']
})
export class InsertInfoPageComponent implements OnInit {

  @ViewChild(AppDirective,{static:true}) pageInsert: AppDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponents();
  }

  loadComponents(){
    const components = new InfoComponent();
    console.log(components.getComponents("input"));
  }

}
