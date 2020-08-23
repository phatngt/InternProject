import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[pageInsert]'
})
export class AppDirective {

  constructor(private viewContainerRef: ViewContainerRef) { }

}
