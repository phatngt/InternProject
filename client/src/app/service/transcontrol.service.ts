import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranscontrolService {

  constructor() { }
  private _transControl = new Subject();
  public signControl = this._transControl.asObservable();

  transSignControl(data?:any){
    this._transControl.next(data);
  }
}
