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
    hideNum = true;

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
    
        console.log("on init details");
        this.relatedHandymanList=[];
        this.ourservicesservice.getHandyman()
                .subscribe(data=>{
                    data.handymans.forEach(element=>{
                        if(element._id === this.handymanservice.getdataForDetailsPage()){
                            this.dataHandyman = element;
                            this.setRelatedHandymanList(element.serviceName);
                        }
                    })
                });
     }

     setRelatedHandymanList(serviceName) {
        this.ourservicesservice.getHandyman()
            .subscribe(data=>{
                data.handymans.forEach(element=>{
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
        console.log(this.dataHandyman);
        setTimeout(() => {
            let newRating = ((this.dataHandyman.rating * this.dataHandyman.ratingNumber) + this.selectedRating)/(this.dataHandyman.ratingNumber + 1);
            this.dataHandyman.ratingNumber+=1;
            this.dataHandyman.rating = newRating;
            console.log(this.dataHandyman);
            this.ourservicesservice.updateHandyman(this.dataHandyman);
        }, 2000);
    }

    hireHim(){
        this.hideNum = false;
        console.log(this.ourservicesservice.customerId);
        this.ourservicesservice.updateCustomer();
    }

}