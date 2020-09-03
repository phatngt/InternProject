import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[pageInsert]',
})
export class AppDirective {
  condition:boolean;
  constructor(public viewContainerRef: ViewContainerRef) { }

}
