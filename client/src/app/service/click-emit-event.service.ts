import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickEmitEventService {
  constructor() { }
  private _clickEvent = new Subject();
  public clickEvent = this._clickEvent.asObservable()

  click(emit?:any){
    this._clickEvent.next(emit);
  }
}
