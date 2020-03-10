import { Component, OnInit } from '@angular/core';
import { OurServicesService } from '../our-services.service';
import { HandymanService } from '../handyman/handyman.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { element } from 'protractor';

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
    this.ourservices=[];
    this.allHandymanList=[];
    this.verifiedHandymanList=[];
    this.notVerifiedHandymanList=[];
    console.log("lol00");
    
  
    this.ourservicesservice.getServices()
        .subscribe(data=>{
          this.ourservices=data;
        });
    this.ourservicesservice.getHandyman()
        .subscribe(data=>{
          this.allHandymanList=data.handymans;
          data.handymans.forEach(element=>{
            if(element.isVerified){
              this.verifiedHandymanList.push(element);
            }
            if(!element.isVerified){
              this.notVerifiedHandymanList.push(element);
            }
          })
        });
  }
  verifyHandyman(idHandyman){
    console.log(idHandyman);
    
    this.notVerifiedHandymanList
              .forEach(element=>{
                  if(element._id === idHandyman){
                    console.log(element);
                    console.log(element.isVerified);
                    element.isVerified = true;
                    console.log(element);
                    this.ourservicesservice.updateHandyman(element);
                    this.verifiedHandymanList.push(element);
                    alert("Verified");
                    this.ngOnInit();
                    // return;
                  }
              });    
  }
  unverifyHandyman(idHandyman){
    console.log(idHandyman);
    
    this.verifiedHandymanList
              .forEach(element=>{
                  if(element._id === idHandyman){
                    console.log(element);
                    console.log(element.isVerified);
                    element.isVerified = false;
                    console.log(element);
                    this.ourservicesservice.updateHandyman(element);
                    this.notVerifiedHandymanList.push(element);
                    alert("Un-Verified");
                    this.ngOnInit();
                    // return;
                  }
              });    
  }

  deleteHandyman(idHandyman){
    this.ourservicesservice.deleteHandyman(idHandyman);
    alert("Deleted");
    this.ngOnInit();

  }

  onSubmitLoginForm(loginForm : NgForm){
    
    if( ("").localeCompare(loginForm.value.uname) === 0
        &&
        ("").localeCompare(loginForm.value.password) === 0 ){
          this.login=false;
          this.admin=true;
    }
    else
      alert ("Username or Password Incorrect !");
  }
  // admin=false;
  // login=true;
  login=false;
  admin=true;
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
