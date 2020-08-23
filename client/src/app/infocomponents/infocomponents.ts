
import {TopbarComponent} from "../components/topbar/topbar.component"
import {InputComponent} from "../components/input/input.component"

export class InfoComponent{
    constructor(){}
    getComponents(component:string){
        switch(component){
            case "topbar": return TopbarComponent;
            case "input": return InputComponent;
            default: return null;
        }
    }
}