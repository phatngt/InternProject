import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransdatatoappService {
  private _transdata = new Subject();
  public transdata = this._transdata.asObservable();

  constructor(){}
  transDataToApp(data?:any){
    this._transdata.next(data);
  }
}
