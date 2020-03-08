import { Component, OnInit } from '@angular/core';
import { OurServicesService } from '../our-services.service';
import { HandymanService } from '../handyman/handyman.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public ourservicesservice: OurServicesService,
    public handymanservices: HandymanService,
    public route: ActivatedRoute,
    public router: Router
    ) { }

  searchText;
  urlopen='url(\'';
  urlclose='\')';
  showSwitchCase={
    "value" : "all"
  }
  ourservices=[];
  allHandymanList=[];
  verifiedHandymanList=[];
  notVerifiedHandymanList=[];

  ngOnInit() {
    this.ourservicesservice.getServices()
        .subscribe(data=>{
          this.ourservices=data;
        });
    this.ourservicesservice.getHandyman()
        .subscribe(data=>{
          this.allHandymanList=data;
          data.forEach(element=>{
            if(element.isVerified){
              this.verifiedHandymanList.push(element);
            }
            if(!element.isVerified){
              this.notVerifiedHandymanList.push(element);
            }
          })
        });
  }
  unverifyHandyman(idHandyman){

  }

  onSubmitLoginForm(loginForm : NgForm){
    console.log(loginForm.value);
    
    if( ("").localeCompare(loginForm.value.uname) === 0
        &&
        ("").localeCompare(loginForm.value.password) === 0 ){
          this.login=false;
          this.admin=true;
    }
    else
      alert ("Username or Password Incorrect !");
  }
  admin=false;
  login=true;
  showAdmin(){
    if(this.admin)
      return "block";
    return "none";
  }
  showLogin(){
    if(this.login)
      return "block";
    return "none";
  } 

}
