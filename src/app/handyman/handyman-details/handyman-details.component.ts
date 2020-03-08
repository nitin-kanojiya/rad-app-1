import { Component, OnInit } from '@angular/core';
import { HandymanService } from '../handyman.service';
import { OurServicesService } from 'src/app/our-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';

@Component({
    selector: 'app-handyman-details',
    templateUrl: './handyman-details.component.html',
    styleUrls: ['./handyman-details.component.css']
})

export class HandymanDetailsComponent implements OnInit {

    dataId;
    serviceData;
    selectedRating = 0;
    ourservices=[];
    relatedHandymanList=[];
    dataHandyman;

    constructor(
        public handymanservice: HandymanService,
        public ourservicesservice: OurServicesService,
        public route: ActivatedRoute,
        public router: Router
    ) { }

    ngOnInit() {
        this.selectedRating = 0;
        this.ourservices=[];
        this.relatedHandymanList=[];
    
        // console.log("on init ");
        this.relatedHandymanList=[];
        this.ourservicesservice.getHandyman()
                .subscribe(data=>{
                    data.forEach(element=>{
                        if(element.id === this.handymanservice.getdataForDetailsPage()){
                            this.dataHandyman = element;
                            this.setRelatedHandymanList(element.serviceName);
                        }
                    })
                });
     }

     setRelatedHandymanList(serviceName) {
        this.ourservicesservice.getHandyman()
            .subscribe(data=>{
                data.forEach(element=>{
                    if((element.serviceName.toLowerCase()).localeCompare(serviceName)===0){
                        this.relatedHandymanList.push(element);
                    }
                })
            })
    }

    gotoDetails(dataForDetails){
        // console.log("CLick = " + dataForDetails);
        this.handymanservice.setDataForDetailPage(dataForDetails);
        this.ngOnInit();
    }
    
    ratingChanged(){
        
    }

}