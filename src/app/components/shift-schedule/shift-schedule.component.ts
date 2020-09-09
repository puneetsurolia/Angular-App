import { Component, OnInit } from '@angular/core';
import { MiddleLayerService } from '../../services/Http-layer/middle-layer/middle-layer.service';
///import {MatFormFieldControl} from '@angular/material';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-shift-schedule',
  templateUrl: './shift-schedule.component.html',
  styleUrls: ['./shift-schedule.component.scss']
})
export class ShiftScheduleComponent implements OnInit {
  dropDownList = ["EST_1", "EST_2", "IST_1", "IST_2"];
  shifts = ["Abhishek", "Puneet", "Pratyush", "Deepam", "Rupesh", "DeepakR", "Tiago"];
  postObject = {
    "monday": [],
    "tuesday": [],
    "wednesday": [],
    "thursday": [],
    "friday": [],
    "saturday": [],
    "sunday": []
  };
  employeess: string[] = [];
  counter: boolean = false;
  constructor(private middle: MiddleLayerService, private router: Router) { }


  ngOnInit(): void {
  }

  fetchPresentEmployee() {
    this.middle.fetchEmployee().subscribe((res: any[]) => {
      this.employeess = res['employee'];
      this.counter = true;
    })
  }

  on_click() {
    this.fetchPresentEmployee();
  }

  addMember() {

    this.router.navigateByUrl('/addMember')
  }
  save_and_mail() {

    
    let obj = {};
    // let json = {

    //   "abshishek": {
    //     "monday": "we",
    //     "tuesday": "rer"
    //   },
    //   "abpunneshishek": {
    //     "monday": "we",
    //     "tuesday": "rer"
    //   },

    // }
    // LET SHIFT =["ABHISHEK","PUNNET"]
    for (let i = 0; i < this.shifts.length; i++) {
      this.shifts[i]//abhsihek
     obj[this.shifts[i]]={
      "Monday": this.postObject["monday"][i] ? this.postObject["monday"][i]:"",
      "Tuesday": this.postObject["tuesday"][i]?  this.postObject["tuesday"][i]:"",
      "Wednesday": this.postObject["wednesday"][i]? this.postObject["wednesday"][i]:"",
      "Thrusday": this.postObject["thursday"][i]? this.postObject["thursday"][i]:"",
      "Friday": this.postObject["friday"][i]? this.postObject["friday"][i]:"",
    
      "Saturday": this.postObject["saturday"][i]? this.postObject["saturday"][i]:"",

      "Sunday": this.postObject["sunday"][i]? this.postObject["sunday"][i]:""

     };
        }

    console.log(obj)
    this.middle.createShedule(obj).subscribe((res: any[]) => {
      console.log(res)
    })
  }
  approve_Leave() {

  }

  selectCar(e) {
    console.log(this.postObject)
  }


}
