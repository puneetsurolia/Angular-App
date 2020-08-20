import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShiftScheduleComponent } from './components/shift-schedule/shift-schedule.component';
import {SupportTeamComponent} from './components/support-team/support-team.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';


const routes: Routes = [
{path:'createschedule', component :ShiftScheduleComponent },
{path:'',component:SupportTeamComponent},
{path:"addMember",component :UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
