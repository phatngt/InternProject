import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'rxjs';
import { ConfigService } from 'src/app/configure/config.service';
import {InforTable} from 'src/app/infomation/infotable'
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

}
