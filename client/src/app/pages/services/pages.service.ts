import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ConfigService} from 'src/app/configure/config.service'
import { Observable } from 'rxjs';
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
    let pageUrl = (await this.configService.getConfig()).pageUrl +"/name?keyword=" + name_page;   
    return this.http.get(pageUrl).toPromise();
  } 
  //the function name isn't fine
  async getComponentOfPage(name_page:string){
    let response = await this.getDataOfPage(name_page);
    const flag_page = response["success"];
    if(flag_page){
      return response["data"];
    }
  }

  postInfoEmployee(data:Object):Observable<any>{
    //const employeUrl = this.configService.getConfig().employeeUrl;
    //console.log(employeUrl);
    console.log(data);
    //
    return this.http.post<any>("http://localhost:3000/employee",data);
  }

}
