import { Component, OnInit } from '@angular/core';
import { HandymanService } from '../handyman/handyman.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OurServicesService } from '../our-services.service';
import { element } from 'protractor';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  handymanCase={ value:"labour" };
  handymancaseValue: string= "";

  services=[];

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
      this.services=data.slice(0,3);
    } );
  }
  setHandymanLists(){
    this.ourservicesservice.getHandyman()
    .subscribe( data =>{
      // console.log(data);
      data.forEach(element=>{
        if( ((element.serviceName).toLowerCase()).localeCompare("labour")===0 ){
          if(this.labours.length<3)
            this.labours.push(element);
        }
        if( ((element.serviceName).toLowerCase()).localeCompare("carpenter")===0 ){
          if(this.carpenters.length<3)
            this.carpenters.push(element);
        }
        if( ((element.serviceName).toLowerCase()).localeCompare("plumber")===0 ){
          if(this.plumbers.length<3)
            this.plumbers.push(element);
        }
        if( ((element.serviceName).toLowerCase()).localeCompare("electrician")===0 ){
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
        this.gotoListPage(element.id);
      }
    });
  }

}


// labours=[
//   {
//     "name": "ranjan pant",
//     "age": 21,
//     "img_url": "url('../../assets/img/labour/labour (1).jpg')"
//   },
//   {
//     "name": "ravi kaler",
//     "age": 20,
//     "img_url": "url('../../assets/img/labour/labour (2).jpg')"
//   },
//   {
//     "name": "rohit kamboj",
//     "age": 22,
//     "img_url": "url('../../assets/img/labour/labour (3).jpg')"
//   },
//   {
//     "name": "shahid khan",
//     "age": 20,
//     "img_url": "url('../../assets/img/labour/labour (4).jpg')"
//   }
// ];
// plumbers=[
//   {
//     "name": "ranjan pant",
//     "age": 21,
//     "img_url": "url('../../assets/img/plumber/plumber (1).jpg')"
//   },
//   {
//     "name": "ravi kaler",
//     "age": 20,
//     "img_url": "url('../../assets/img/plumber/plumber (2).jpg')"
//   },
//   {
//     "name": "rohit kamboj",
//     "age": 22,
//     "img_url": "url('../../assets/img/plumber/plumber (3).jpg')"
//   },
//   {
//     "name": "shahid khan",
//     "age": 20,
//     "img_url": "url('../../assets/img/plumber/plumber (4).jpg')"
//   }
// ];
// electricians=[
//   {
//     "name": "Aftab ahmed",
//     "age": 21,
//     "img_url": "url('../../assets/img/electrician/electrician (1).jpg')"
//   },
//   {
//     "name": "Veer singh",
//     "age": 20,
//     "img_url": "url('../../assets/img/electrician/electrician (2).jpg')"
//   },
//   {
//     "name": "bhole lal",
//     "age": 22,
//     "img_url": "url('../../assets/img/electrician/electrician (3).jpg')"
//   },
//   {
//     "name": "rizwi shah",
//     "age": 20,
//     "img_url": "url('../../assets/img/electrician/electrician (4).jpg')"
//   }
// ];
// carpenters=[
//   {
//     "name": "Mukesh suri",
//     "age": 21,
//     "img_url": "url('../../assets/img/carpenter/carpenter(1).jpg')"
//   },
//   {
//     "name": "raj Ambani",
//     "age": 20,
//     "img_url": "url('../../assets/img/carpenter/carpenter(2).jpg')"
//   },
//   {
//     "name": "Pandit ramfal",
//     "age": 22,
//     "img_url": "url('../../assets/img/carpenter/carpenter(3).jpg')"
//   },
//   {
//     "name": "Mohd Abdul",
//     "age": 20,
//     "img_url": "url('../../assets/img/carpenter/carpenter(4).jpg')"
//   }
// ];
