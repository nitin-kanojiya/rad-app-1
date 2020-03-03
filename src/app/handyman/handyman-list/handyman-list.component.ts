import { Component, OnInit } from '@angular/core';
import { HandymanService } from '../handyman.service';
import { OurServicesService } from 'src/app/our-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-handyman-list',
    templateUrl: './handyman-list.component.html',
    styleUrls: ['./handyman-list.component.css']
})

export class HandymanListComponent implements OnInit {

    serviceName = "";
    ourservices=[];
    serviceData;
    handymanList=[];

    urlopen='url(\'';
    urlclose='\')';

    constructor(
        public handymanservice: HandymanService,
        public ourservicesservice: OurServicesService,
        public route: ActivatedRoute,
        public router: Router
        ) { }

    ngOnInit() {
        this.ourservices= this.ourservicesservice.getServices();
        this.setData(this.handymanservice.getDataForList());
    }

    setData(idDataForList){
        this.ourservices.forEach(element=>{
            if(element.id === idDataForList){
                this.serviceData=element;
            }
        })
        // alert(this.serviceData.name);
        this.serviceName=this.serviceData.name;
            if ('list' in this.serviceData) {
                this.handymanList=this.serviceData.list;
            }
    }
    gotoDetails(dataForDetails){
        this.handymanservice.setDataForDetail(dataForDetails);
        this.router.navigate(['/details'],{relativeTo: this.route});
    }

}