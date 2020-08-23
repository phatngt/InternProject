import { Component, OnInit } from '@angular/core';
import { TopbarService} from './topbar.service'
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private topbarService: TopbarService) { }

  ngOnInit(): void {
    this.recieveData("123");
  }

  recieveData(page:string){
    return this.topbarService.getTopbarDataFromServer("123");
  }

}
