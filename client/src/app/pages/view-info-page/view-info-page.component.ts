import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { InfoComponent } from 'src/app/infomation/infocomponents';
import { ViewPageDirective } from 'src/app/directive/view-page/view-page.directive';
import { ClickEmitEventService } from 'src/app/service/click-emit-event.service';
import { TranscontrolService} from "src/app/service/transcontrol.service"

@Component({
  selector: 'app-view-info-page',
  templateUrl: './view-info-page.component.html',
  styleUrls: ['./view-info-page.component.css']
})
export class ViewInfoPageComponent implements OnInit {

  @ViewChild(ViewPageDirective,{static:true})
  viewPage:ViewPageDirective;
  constructor(private pageService: PagesService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private emitClickService: ClickEmitEventService,
    private transControlService: TranscontrolService  ) { }

  ngOnInit(): void {
    this.renderViewInfoPage();
  }

  loadComponents(name_component:string,data:any){
    const components = new InfoComponent();
    const component =  components.getComponents(name_component);
    var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    var viewContainerRef:ViewContainerRef;
    viewContainerRef = this.viewPage.viewContainerRef;
    const componentRef  = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = data;
    }
  async renderViewInfoPage(){
    let data = (await this.pageService.getComponentOfPage("viewinfo"));
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

  
}
