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
  dynamicColumn =['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
  abc="abhishek"
  postObject ={
    "monday":["Abhishek","Deepam","DeepakR","Tiago"],
    "tuesday":[],
    "wednesday":[],
    "thursday":[],
    "friday":[],
    "saturday" :[],
    "sunday" :[]
  };
  ekObject = {
   
    s1:["Abhishek","Deepam","DeepakR","Tiago"],
    s2:["Abhishek","Deepam","DeepakR","Tiago"],
    s3:["Abhishek","Deepam","DeepakR","Tiago"],
    s4:["Abhishek","Deepam","DeepakR","Tiago"]
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
  
 }
 approve_Leave(){

 }


}
