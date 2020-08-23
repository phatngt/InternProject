import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Config } from './config';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'assets/config.json'
  constructor(private http: HttpClient) { }

  getConfig():Promise<Config>{
    return this.http.get<Config>(this.configUrl).toPromise();
  }
}
