import { Component, OnInit } from '@angular/core';
import {MiddleLayerService} from '../../services/Http-layer/middle-layer/middle-layer.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})

export class DashBoardComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'Phone', 'Username','Website'];
  ELEMENT_DATA :any[]
  dataSource :any[];
  filteredOptions:String[]=["abhishek","puneet","Tanvi","Shilpa","Deepam"];
  
  constructor(private middleLayer :MiddleLayerService) { }

  ngOnInit(): void {

this.fetchHealthCheckDat();
  }

  /**
   * @description this fetch data for the health
   */

 async fetchHealthCheckDat() {
this.middleLayer.extractHealthCheckAll();
let b = await  fetch("https://jsonplaceholder.typicode.com/users");
this.ELEMENT_DATA = await b.json();
this.dataSource =this.ELEMENT_DATA

  }
}
