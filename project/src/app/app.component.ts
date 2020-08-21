import { Component, SimpleChange, ViewChild, AfterContentInit, AfterViewInit, OnInit } from '@angular/core';
import {ContainerService} from './container/container.service'
import {CompItem} from './container/component'
import { Remote } from './container/remote.dto';
import { ContainerComponent } from './container/container.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'project';
  comp: CompItem[];
  valueRemote: Remote[]; 
  signal: string = '2';
  constructor(private compService: ContainerService){
  }
  ngOnInit(){
    this.comp = this.compService.getComp();
  }

  
  // ngAfterViewInit(): void {
  //   console.log(this.pro);
  // }

}
