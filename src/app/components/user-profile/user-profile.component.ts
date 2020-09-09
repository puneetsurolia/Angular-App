import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



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
  constructor() { }

  ngOnInit(): void {
  }
  on_click() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    
  }

}
