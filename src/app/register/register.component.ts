import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { OurServicesService } from '../our-services.service';
import { HandymanService } from '../handyman/handyman.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HandymanModel } from '../handyman/handyman.model';
// import { mimeType } from "./mime-type.validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  termsCheck=false;
  showhide=false;

  ourservices=[];
  registerForm: FormGroup;
  imagePreview;

  constructor(
    public ourservicesservice: OurServicesService,
    public handymanservices: HandymanService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name' : new FormControl(null , {
        validators: [Validators.required]
      }),
      'dob' : new FormControl(null , {
        validators: [Validators.required]
      }),
      'contactNumber' : new FormControl(null , {
        validators: [Validators.required]
      }),
      'aadharNumber' : new FormControl(null , {
        validators: [Validators.required]
      }),
      'serviceName' : new FormControl(null , {
        validators: [Validators.required]
      }),
      'serviceExperience' : new FormControl(null , {
        validators: [Validators.required]
      }),
      'city' : new FormControl(null , {
        validators: [Validators.required]
      }),
      'state' : new FormControl(null , {
        validators: [Validators.required]
      }),
      'previewImg' : new FormControl(null , {
        validators: [Validators.required]
        // ,asyncValidators: [mimeType]
      })
    });
    this.ourservicesservice.getServices()
        .subscribe(data=>{
          this.ourservices = data;
        })
  }
  
  newHandymanDetails : HandymanModel={
    "_id": "0",

    "name": "",
    "dob": "",
    
    "img_url": "",
    
    "contactNumber": "",
    "aadharNumber": "",
    "serviceName": "",
    "serviceExperience": 0,
    "city": "",
    "state": "",

    "isVerified": false,
    "rating": 0,
    "ratingNumber": 0
  };


  showAlert(){
    this.showhide=true;
    setTimeout(()=>{
      this.showhide=false;
    },6000);
  }

  onSubmitForm(){
    if(this.registerForm.invalid){
      console.log("invalid");
      console.log(this.registerForm.value);
      return;
    }
    console.log("Valid");
    console.log(this.registerForm.value);
    this.newHandymanDetails.name=this.registerForm.value.name;
    this.newHandymanDetails.contactNumber=this.registerForm.value.contactNumber;
    this.newHandymanDetails.aadharNumber=this.registerForm.value.aadharNumber;
    this.newHandymanDetails.serviceName=this.registerForm.value.serviceName;
    this.newHandymanDetails.dob=this.registerForm.value.dob;
    this.newHandymanDetails.serviceExperience=this.registerForm.value.serviceExperience;
    this.newHandymanDetails.city=this.registerForm.value.city;
    this.newHandymanDetails.state=this.registerForm.value.state;
    this.newHandymanDetails.img_url=this.registerForm.value.previewImg;

    console.log(this.newHandymanDetails.dob);
    
    this.termsCheck=false;
    this.showAlert();
    
    this.registerForm.reset();
    this.newHandyman(this.newHandymanDetails);
  }

  newHandyman(Details){
    this.ourservicesservice.createHandyman(Details);
    
  }

  onImagePicked(event : Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.registerForm.patchValue({
      'previewImg' : file
    });
    this.registerForm.get('previewImg').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview = reader.result;
    };    
    reader.readAsDataURL(file);
    // console.log(this.imagePreview);
  }
}