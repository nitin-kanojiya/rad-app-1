import { Component, OnInit } from '@angular/core';
import { HandymanService } from '../handyman.service';
import { OurServicesService } from 'src/app/our-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-handyman-details',
    templateUrl: './handyman-details.component.html',
    styleUrls: ['./handyman-details.component.css']
})

export class HandymanDetailsComponent implements OnInit {

    ourservices=[];
    dataId;
    serviceData;
    handymanList=[];
    dataHandyman;

    constructor(
        public handymanservice: HandymanService,
        public ourservicesservice: OurServicesService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.ourservices= this.ourservicesservice.getServices();
        this.setListData(this.handymanservice.getDataForList());
        this.setData(this.handymanservice.getdataForDetails());
     }
    setData(dataId) {
        this.dataId=dataId;
        this.handymanList.forEach(element => {
            if((this.dataId)===(element.id)){
                this.dataHandyman=element;
            }
        });
    }
    setListData(idDataForList){
        this.ourservices.forEach(element=>{
            if(element.id === idDataForList){
                this.serviceData=element;
            }
        })
        // alert(this.serviceData.name);
        // this.serviceName=this.serviceData.name;
            if ('list' in this.serviceData) {
                this.handymanList=this.serviceData.list;
            }
    }
    gotoDetails(dataForDetails){
        this.handymanservice.setDataForDetail(dataForDetails);
        this.router.navigate(['/details'],{relativeTo: this.route});
    }


}