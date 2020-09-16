import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLeft]'
})
export class LeftDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
