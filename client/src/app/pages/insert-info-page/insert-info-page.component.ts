import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnChanges, ContentChildren, QueryList } from '@angular/core';
import { AppDirective } from 'src/app/directive/app.directive';
import {InfoComponent} from 'src/app/infocomponents/infocomponents'
import {TransdataService} from 'src/app/service/transdata.service'
import {DataOfInsertPage} from "src/app/interface/dataofinsertpage"
import {PagesService} from 'src/app/pages/services/pages.service'
@Component({
  selector: 'app-insert-info-page',
  templateUrl: './insert-info-page.component.html',
  styleUrls: ['./insert-info-page.component.css']
})
export class InsertInfoPageComponent implements OnInit {
  //Virw child partion
  @ViewChild(AppDirective,{static:true}) 
  pageInsert: AppDirective;
  //Declared variable partion
  dataOfPage = [];
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private transservice: TransdataService,
    private pageService: PagesService
    ) { }

  ngOnInit(): void {
    this.renderInsertPage();
    this.collectData();
  }

  loadComponents(name_component:string,data:any){
    const components = new InfoComponent();
    const component =  components.getComponents(name_component);
    //console.log(component);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef  = this.pageInsert.viewContainerRef; 
    const componentRef  = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = data;
  }
  async renderInsertPage(){
    let data = (await this.pageService.getComponentOfPage("insert"));
    // let list = [{type:"input",label:"First name"},{type:"input",label:"Last name"}]
    for(let i=0; i < data.length ; i++){
      this.loadComponents("input",data[i].label);
    }
  }

  collectData(){
    console.log(this.transservice.transdata.subscribe(data=>{
      let info:DataOfInsertPage = data;
      console.log(info.label);
      let index = this.dataOfPage.findIndex(p=>p.label === info.label)
      console.log(index)
      if(index !=-1){
        this.dataOfPage[index].value = info.value;
      }
      else{
        this.dataOfPage.push(info);
      }
      console.log(this.dataOfPage)
    }));
  }

  

}
