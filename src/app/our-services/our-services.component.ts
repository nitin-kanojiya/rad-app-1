import { Component, OnInit } from '@angular/core';
import { OurServicesService } from '../our-services.service';
import { HandymanService } from '../handyman/handyman.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor(
    public ourservicesservice: OurServicesService,
    public handymanservices: HandymanService,
    public route: ActivatedRoute,
    public router: Router
    ) { }

  searchText;

  ourservices=[];
  ngOnInit() {
    this.ourservicesservice.getServices()
        .subscribe(data=>{
          this.ourservices=data.documents;
          // console.log(data);
        });
  }
  gotoListPage(IdofService){
    console.log(IdofService);    
    this.handymanservices.setDataForListPage(IdofService);
    this.router.navigate([`/list`],{relativeTo: this.route});
  }

}
