import { Component, OnInit } from '@angular/core';
import {MiddleLayerService} from '../../services/Http-layer/middle-layer/middle-layer.service';

// const ELEMENT_DATA: any[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

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
