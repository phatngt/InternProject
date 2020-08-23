
import {TopbarComponent} from "../components/topbar/topbar.component"
import {InputComponent} from "../components/input/input.component"
import { Type } from '@angular/core';

export class InfoComponent{
    constructor(){}
    getComponents(component:string):Type<any>{
        switch(component){
            case "topbar": return TopbarComponent;
            case "input": return InputComponent;
            default: return null;
        }
    }
}