import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'rxjs';
import { ConfigService } from 'src/app/configure/config.service';
import {InforTable} from 'src/app/infomation/infotable';
export interface InfoObject{
  key?:string;
  value?:string;
}
@Injectable({
  providedIn: 'root'
})
export class ViewtableService {
  constructor(
        private configService:ConfigService,
        private http: HttpClient) { }

  async getDataFromFilter(name:string){
    let info = new InforTable(this.configService);
    let infoUrl  = await info.getTypeUrl(name);
    console.log(infoUrl);
    return this.http.get(infoUrl).toPromise();
  }

  async getDataDetails(name_page:string){
    let response = await this.getDataFromFilter(name_page);
    const flag_page = response["success"];
    if(flag_page){
      return response["data"];
    }
  }

  handleDataWhenClickEdit(_info:Object){
    let infoFinal:Array<any> = [];
    let keys:Array<string> = Object.keys(_info);
    let values:Array<any> = Object.values(_info);
    let _index = 0;
    keys.forEach(k=>{
      let key ={};
      let value = {};
      key["label"] = k.replace('_',' ');
      value["value"] = values[_index++]
      infoFinal.push(Object.assign(key,value));
    })
    return infoFinal;
  }

}
