import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rightPage]'
})
export class RightDirective {

  constructor(public viewContainerRef : ViewContainerRef) { }

}
