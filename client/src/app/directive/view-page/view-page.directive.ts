import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appViewPage]'
})
export class ViewPageDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
