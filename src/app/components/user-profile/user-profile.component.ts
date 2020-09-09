import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MiddleLayerService } from '../../services/Http-layer/middle-layer/middle-layer.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    timezone: new FormControl('')
  });
  constructor(private middle: MiddleLayerService) {}

  ngOnInit(): void {
  }
  on_click() {
    this.middle.addmember(this.profileForm.value).subscribe((res:any[])=>{
console.log(res)
    })
  }

}
