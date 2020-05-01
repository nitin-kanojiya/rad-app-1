import { Component, OnInit } from '@angular/core';
import { HandymanService } from '../handyman/handyman.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OurServicesService } from '../our-services.service';
import { element } from 'protractor';
import { OurServiceModel } from '../our-services/ourservices.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  handymanCase={ value:"labour" };
  handymancaseValue: string= "";

  services : OurServiceModel[]=[];
  suggestServiceName='';

  labours=[];
  plumbers=[];
  carpenters=[];
  electricians=[];

  constructor(private router: Router,
    public handymanservice: HandymanService,
    public ourservicesservice: OurServicesService, 
    private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.setServices();
    this.setHandymanLists();
  }

  setServices(){
    this.ourservicesservice.getServices()
    .subscribe( data =>{
      // console.log(data);
      this.services=data.documents.slice(0,3);
    } );
  }
  setHandymanLists(){
    this.ourservicesservice.getHandyman()
    .subscribe( data =>{
      // console.log(data);
      data.handymans.forEach(element=>{
        if( ((element.serviceName).toLowerCase()).localeCompare("labour")===0
            &&
            element.isVerified 
            ){
          if(this.labours.length<3)
            this.labours.push(element);
        }
        if( ((element.serviceName).toLowerCase()).localeCompare("carpenter")===0 
            &&
            element.isVerified 
            ){
          if(this.carpenters.length<3)
            this.carpenters.push(element);
        }
        if( ((element.serviceName).toLowerCase()).localeCompare("plumber")===0 
            &&
            element.isVerified 
            ){
          if(this.plumbers.length<3)
            this.plumbers.push(element);
        }
        if( ((element.serviceName).toLowerCase()).localeCompare("electrician")===0 
            &&
            element.isVerified 
            ){
          if(this.electricians.length<3)
            this.electricians.push(element);
        }      
      });
    } );
  }
  gotoListPage(IdofService){
    this.handymanservice.setDataForListPage(IdofService);
    this.router.navigate([`/list`],{relativeTo: this.route});
  }
  findIdForListPage(){
    this.handymancaseValue=this.handymanCase.value.toLowerCase();
    this.services.forEach(element => {
      if(this.handymancaseValue.localeCompare(element.name.toLowerCase())===0){
        this.gotoListPage(element._id);
      }
    });
  }

  suggestService(){
    console.log(this.suggestServiceName);
    this.ourservicesservice.createSuggestion(this.suggestServiceName);
  }
}