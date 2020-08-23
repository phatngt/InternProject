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

  async getTopbarDataFromServer(idpage: string):Promise<any>{
    const pageUrl = (await (this.configService.getConfig())).pageUrl;
    console.log(pageUrl)
    let data = await this.http.get(pageUrl + "?id=1").toPromise();
    console.log(data)
    return data 
  }

}
