import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEditRightPage]'
})
export class EditRightPageDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
