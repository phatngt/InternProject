import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {ConfigService} from 'src/app/configure/config.service'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  ///////////////////////
  async getDataEmployee(name_page:string):Promise<any>{
    let pageUrl = (await this.configService.getConfig()).employeeUrl +"/name?keyword=" + name_page;   
    return this.http.get(pageUrl).toPromise();
  } 
  async getDataDetails(name_page:string){
    let response = await this.getDataEmployee(name_page);
    const flag_page = response["success"];
    if(flag_page){
      return response["data"];
    }
  }
  //////////////////////////


  postInfoEmployee(data:Object):Observable<any>{
    //const employeUrl = this.configService.getConfig().employeeUrl;
    //console.log(employeUrl);
    console.log(data);
    //
    return this.http.post<any>("http://localhost:3000/employee",data).pipe(catchError(this.handleError));
  }
  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred:',error.error.message);
    }
    else{
      console.error(`Backend returned code ${error.status},`+`body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
  
}
