import { Component, OnInit } from '@angular/core';
import {MiddleLayerService} from '../../services/Http-layer/middle-layer/middle-layer.service';
///import {MatFormFieldControl} from '@angular/material';
import { Router } from '@angular/router';

import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-shift-schedule',
  templateUrl: './shift-schedule.component.html',
  styleUrls: ['./shift-schedule.component.scss']
})
export class ShiftScheduleComponent implements OnInit {
  dropDownList = ["EST_1","EST_2","IST_1","IST_2"];
  shifts=["Abhishek","Puneet","Pratyush","Deepam","Rupesh","DeepakR","Tiago"];
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
   constructor(private middle :MiddleLayerService,private router :Router) { }
   

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

 addMember(){
  
   this.router.navigateByUrl('/addMember')
}
 save_and_mail(){
 
  alert("data saved.")
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
