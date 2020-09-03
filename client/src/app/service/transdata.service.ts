import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransdataService {
  private _transdata = new Subject();
  public transdata = this._transdata.asObservable();

  constructor(){}
  transData(data?:any){
    this._transdata.next(data);
  }
}
