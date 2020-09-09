import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support-team',
  templateUrl: './support-team.component.html',
  styleUrls: ['./support-team.component.scss']
  
})
export class SupportTeamComponent implements OnInit {
  person= {
    userName:"",
    password:""  }
  
  constructor(private route : Router) { }

  on_click() {
   console.log(this.person)
   if(this.person.userName == "admin"){
   this.route.navigateByUrl('/createschedule')
  }else{
    this.route.navigateByUrl('/leaveform')
  }
  }
  ngOnInit(): void {
  }

}
