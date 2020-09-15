
import {TopbarComponent} from "../components/topbar/topbar.component";
import {InputComponent} from "../components/input/input.component";
import { ButtonComponent} from '../components/button/button.component';
import {SelectComponent} from "../components/select/select.component";
import {CheckboxComponent} from "../components/checkbox/checkbox.component"
import { Type } from '@angular/core';
import { ViewtableComponent } from '../components/viewtable/viewtable.component';

export class InfoComponent{
    constructor(){}
    getComponents(component:string):Type<any>{
        switch(component){
            case "topbar": return TopbarComponent;
            case "input": return InputComponent;
            case "button": return ButtonComponent;
            case "selecttb": return SelectComponent;
            case "checkbox": return CheckboxComponent;
            case "tablet": return ViewtableComponent;
            default: return null;
        }
    }
}