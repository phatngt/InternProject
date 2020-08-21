import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {CompItem} from "./component"
import {ContentComponent} from "../content/content.component"
import {TitleComponent} from '../title/title.component'
import {TopBarComponent} from '../top-bar/top-bar.component'
import { from, Observable, fromEventPattern } from 'rxjs';
import { Remote } from './remote.dto';
import {} from ''
@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  constructor(private http: HttpClient) { }
  
  listCompOri = [ContentComponent,TitleComponent,TopBarComponent];
  configUrl = 'assets/config.json'

  async remoteComp(id:string):Promise<Remote[]>{
    try{
      let response = await this.http.get(this.configUrl. + id).toPromise();
      return response as Remote[];
    }
    catch{
      await HttpErrorResponse;
    }
  }




  getComp(){



    return [
      new CompItem(ContentComponent),
      new CompItem(TitleComponent),
      new CompItem(TopBarComponent)  
    ]
  }

}
