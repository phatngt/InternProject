import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ConfigService} from 'src/app/configure/config.service'
@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    ) { }

  async getDataOfPage(name_page:string):Promise<any>{
    const pageUrl = ((await this.configService.getConfig()).pageUrl)+"/name?keyword=" + name_page;
    return this.http.get(pageUrl).toPromise();
  } 

  async getComponentOfPage(name_page:string){
    let response = await this.getDataOfPage(name_page);
    const flag_page = response["success"];
    if(flag_page){
      let listComponent = [];
      let list = response["data"]
      Object.keys(list).forEach(p=> listComponent.push(list[p].name_component))
      //console.log(listComponent);
      return listComponent;
    }
  }

}
