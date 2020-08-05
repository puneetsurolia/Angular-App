import { Component, OnInit } from '@angular/core';
import {MiddleLayerService} from '../../services/Http-layer/middle-layer/middle-layer.service';
///import {MatFormFieldControl} from '@angular/material';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-shift-schedule',
  templateUrl: './shift-schedule.component.html',
  styleUrls: ['./shift-schedule.component.scss']
})
export class ShiftScheduleComponent implements OnInit {
  dropDownList = ["Abhishek","Deepam","DeepakR","Tiago","Puneet","Pratyush","Rupesh"];
  shifts=["10:30 PM - 7:30 AM","04:30 AM - 1:30 PM","8:00 AM - 5:00 PM","2:30 PM - 11:30 PM"];
  postObject ={
    "monday":[],
    "tuesday":[],
    "wednesday":[],
    "thursday":[],
    "friday":[],
    "saturday" :[],
    "sunday" :[]
  };
  employeess:string[]=[];
  counter:boolean = false;
   constructor(private middle :MiddleLayerService) { }

  ngOnInit(): void {
  }
  
  fetchPresentEmployee(){
this.middle.fetchEmployee().subscribe((res:any[])=>{
 this.employeess= res['employee'];
 this.counter = true;
})
  }

 on_click(){
   this.fetchPresentEmployee();
 }
 save_and_mail(){
 
  console.log("from save and mail")
  this.middle.createShedule(this.postObject).subscribe((res:any[])=>{
    console.log(res)
  })
 }
 approve_Leave(){

 }

 selectCar(e){
console.log(this.postObject)
 }


}
