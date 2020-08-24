import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {ConfigService} from "src/app/configure/config.service"
import {Config } from 'src/app/configure/config'
@Injectable({
  providedIn: 'root'
})
export class TopbarService {
  
  constructor(
    private http: HttpClient,
    private configService: ConfigService
    ) { }

  async getTopbarDataFromServer(name_page: string):Promise<any>{
    const pageUrl = (await (this.configService.getConfig())).pageUrl + "/name?keyword="+name_page;
    console.log(pageUrl)
    let data = await this.http.get(pageUrl).toPromise();
    console.log(data)
    let listComponent = [];
    let list = data["data"]
    Object.keys(list).forEach(p=> listComponent.push(list[p].name_component))
    console.log(listComponent);

    return data; 
  }

}
