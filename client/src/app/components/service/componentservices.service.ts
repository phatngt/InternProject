import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentservicesService {

  constructor() { }

  handleLabel(label:string){

    let label_temp:Array<any> = label.split(' ');

    let label_final = '';
    if(label_temp.length > 0){
      for(let _index in label_temp){
        if(+_index !== (label_temp.length-1) ){
          label_final = label_temp[_index] + '_';
        }
        else{
          label_final += label_temp[_index];
        }
      }
    }
    else{
      label_final = label;
    }
    return label_final;
    
  }
}
