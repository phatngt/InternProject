
import {TopbarComponent} from "../components/topbar/topbar.component"
import {InputComponent} from "../components/input/input.component"
import { ButtonComponent} from '../components/button/button.component'
import { Type } from '@angular/core';

export class InfoComponent{
    constructor(){}
    getComponents(component:string):Type<any>{
        switch(component){
            case "topbar": return TopbarComponent;
            case "input": return InputComponent;
            case "button": return ButtonComponent;
            default: return null;
        }
    }
}