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
  //the function name is fine
  async getDataOfPage(name_page:string):Promise<any>{
    const pageUrl = ((await (await this.configService.getConfig()).inputUrl))+"/page?keyword=" + name_page;
    console.log(pageUrl)
    return this.http.get(pageUrl).toPromise();
  } 
  //the function name isn't fine
  async getComponentOfPage(name_page:string){
    let response = await this.getDataOfPage(name_page);
    const flag_page = response["success"];
    if(flag_page){
      let listComponent = [];
      let list = response["data"]
      Object.keys(list).forEach(p=> listComponent.push({"label":list[p].label,"placeholder":list[p].placeholder}))
      console.log(listComponent);
      return listComponent;
    }
  }

}
