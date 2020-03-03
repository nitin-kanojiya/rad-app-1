import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  
  details={
    "fullname": "",
    "mobilenumber": "",
    "aadharnumber": "",
    "servicename": "",
    "distance": "",
    "dob": "",
    "experience": "",
    "currCity": "",
    "currState": ""
  };

  termsCheck=false;

  ngOnInit() {
  }

  onSubmitForm(registerForm: NgForm){
    if(registerForm.invalid){
      return;
    }
    console.log(this.details);
    
    this.details.fullname=registerForm.value.fullname;
    this.details.mobilenumber=registerForm.value.mobilenumber;
    this.details.aadharnumber=registerForm.value.aadharnumber;
    this.details.servicename=registerForm.value.servicename;
    this.details.distance=registerForm.value.distance;
    this.details.dob=registerForm.value.dob;
    this.details.experience=registerForm.value.experience;
    this.details.currCity=registerForm.value.currCity;
    this.details.currState=registerForm.value.currState;

    console.log(this.details);

  }

}
