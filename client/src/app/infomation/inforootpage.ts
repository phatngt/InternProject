import {Type} from '@angular/core';
import {InsertInfoPageComponent} from '../pages/insert-info-page/insert-info-page.component';
import {ViewInfoPageComponent} from '../pages/view-info-page/view-info-page.component';
import {EditInfoPageComponent} from '../pages/edit-info-page/edit-info-page.component'
export class InfoRootPage{
    constructor(){}
    getPage(_name:string):Type<any>{
        switch(_name){
            case "insert-page": return InsertInfoPageComponent;
            case "view-info-page":return ViewInfoPageComponent;
            case "edit-info-page":return EditInfoPageComponent;
            default: return ViewInfoPageComponent;
        }
    }
}