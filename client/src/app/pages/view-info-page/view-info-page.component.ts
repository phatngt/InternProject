import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { InfoComponent } from 'src/app/infocomponents/infocomponents';
import { ViewPageDirective } from 'src/app/directive/view-page/view-page.directive';

@Component({
  selector: 'app-view-info-page',
  templateUrl: './view-info-page.component.html',
  styleUrls: ['./view-info-page.component.css']
})
export class ViewInfoPageComponent implements OnInit {

  @ViewChild(ViewPageDirective,{static:true})
  viewPage:ViewPageDirective;
  constructor(private pageService: PagesService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

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
    let info = (await this.pageService.getDataDetails('employee'));
    this.loadComponents('viewtable',info);
  }
}
