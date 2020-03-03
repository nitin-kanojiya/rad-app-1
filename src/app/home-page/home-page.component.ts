import { Component, OnInit } from '@angular/core';
import { HandymanService } from '../handyman/handyman.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OurServicesService } from '../our-services.service';

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

  gotoList(dataForList){
    if (dataForList !== "") {
      this.handymanservice.setDataForList(dataForList);
      this.router.navigate([`/list`],{relativeTo: this.route});      
    }
  }
  findIdForList(){
    this.handymancaseValue=this.handymanCase.value;
    this.handymancaseValue = this.handymancaseValue.toLowerCase();
    this.services.forEach(element => {
      if(this.handymancaseValue.localeCompare(element.name.toLowerCase())===0){
        this.gotoList(element.id);
      }
    });
  }
   
  ngOnInit() {
    this.services=this.ourservicesservice.services;
    this.services=this.services.slice(0,6);
    this.setHandymanList();
  }
  setHandymanList(){
    
    this.services.forEach(element=>{
      if( ((element.name).toLowerCase()).localeCompare("labour")===0 ){
        this.labours=element.list.slice(0,3);
      }
      if( ((element.name).toLowerCase()).localeCompare("carpenter")===0 ){
        this.carpenters=element.list.slice(0,3);
      }
      if( ((element.name).toLowerCase()).localeCompare("plumber")===0 ){
        this.plumbers=element.list.slice(0,3);
      }
      if( ((element.name).toLowerCase()).localeCompare("electrician")===0 ){
        this.electricians=element.list.slice(0,3);
      }
    })

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
