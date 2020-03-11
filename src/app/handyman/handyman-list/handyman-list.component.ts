import { Component, OnInit } from '@angular/core';
import { HandymanService } from '../handyman.service';
import { OurServicesService } from 'src/app/our-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-handyman-list',
    templateUrl: './handyman-list.component.html',
    styleUrls: ['./handyman-list.component.css']
})

export class HandymanListComponent implements OnInit {

    serviceName : string = "";
    ourservices=[];
    // serviceData;
    handymanList=[];

    urlopen='url(\'';
    urlclose='\')';

    constructor(
        public handymanservice: HandymanService,
        public ourservicesservice: OurServicesService,
        public route: ActivatedRoute,
        public router: Router,
        ratingConfig: NgbRatingConfig
        ) { 
            // ratingConfig.max= 5;
        }

    ngOnInit() {
        this.ourservicesservice.getServices()
                .subscribe(data=>{
                    this.ourservices= data;
                });
        this.setData(this.handymanservice.getDataForListPage());
    }

    setData(serviceIdForListPage){
        this.ourservicesservice.getServices()
                .subscribe(data=>{
                    data.forEach(element=>{
                        if(element.id === serviceIdForListPage){
                            this.serviceName = element.name.toLowerCase();
                            this.setHandymanList();
                        }
                    })
                });
    }
    
    setHandymanList(){
        this.ourservicesservice.getHandyman()
                .subscribe(data=>{
                    data.handymans.forEach(element=>{
                        if(((this.serviceName).toLowerCase()).localeCompare(element.serviceName.toLowerCase()) === 0
                            &&
                            element.isVerified                 
                            ){
                            this.handymanList.push(element);
                        }
                    })
                })
    }

    gotoDetailsPage(IdHandymanForDetails){
        console.log(IdHandymanForDetails);
        this.handymanservice.setDataForDetailPage(IdHandymanForDetails);
        this.router.navigate(['/details'],{relativeTo: this.route});
    }

    calcAge(Dob){
        let today = new Date();
        let birthDate = new Date(Dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        // console.log(age + " " + today.getFullYear() + " " + birthDate.getFullYear());
        // console.log(today.getMonth()+" "+birthDate.getMonth());
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }


}