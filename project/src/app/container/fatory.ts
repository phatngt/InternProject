import { title } from "process";

import { TitleComponent } from '../title/title.component';
import { ContentComponent } from '../content/content.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { ComponentFactory } from '@angular/core';

export type ContentType = 'title' | 'content' | 'top-bar';
export class FactoryComponent {

    static create(type: ContentType){
        switch (type) {
            case 'title':
                return TitleComponent
                break;
            case 'content':
                return ContentComponent
                break;
            case 'top-bar':
                return TopBarComponent
                break;
            default:
                break;
        }
    }
}

