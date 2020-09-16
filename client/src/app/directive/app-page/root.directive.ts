import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRoot]'
})
export class RootDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
