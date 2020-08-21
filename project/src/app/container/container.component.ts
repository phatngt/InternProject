import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnChanges } from '@angular/core';
import {CompItem} from './component'
import {ContainerDirective} from './container.directive'
import {ContainerService} from './container.service'
import { Remote } from './remote.dto';
import {FactoryComponent,ContentType} from './fatory';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit,OnChanges {
  @Input() comp: CompItem[];
  remote: Remote[];
  @Input() page: string  = '1';
  @ViewChild(ContainerDirective,{static:true}) containerHost:ContainerDirective;
  interval:any;
  constructor(private componentFactory: ComponentFactoryResolver,
    private containerService: ContainerService) { }
  
  ngOnChanges(){
    //this.getData(this.page)
  }
  ngOnInit(): void {
    this.getData(this.page)
    
  }

  i:ContentType;
  loadComponent(index: number){

        this.i = "title";
        const compItem = FactoryComponent.create(this.i);

        // const compItem = this.comp[index]
        console.log("component",compItem)
        const componentFactory = this.componentFactory.resolveComponentFactory(compItem);
        const viewContainerRef = this.containerHost.viewContainerRef;
        // viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);

  }
  getComp(remote: Remote[]) { 
    console.log(remote);
    if(remote.length > 0){
      for(let i = 0 ; i < remote.length ; i++){
        console.log("compoindex",remote[i].component)
        let index = +remote[i].component - 1;
        console.log("index",index)
        this.loadComponent(index);
      }
    } 
  }
  async getData(page){
    this.remote = await this.containerService.remoteComp(page);
    this.getComp(this.remote);
  }

}
