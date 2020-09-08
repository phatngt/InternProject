import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[leftPage]',
})
export class AppDirective {
  constructor(public viewContainerRef: ViewContainerRef ) { }

}
