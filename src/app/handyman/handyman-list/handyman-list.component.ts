import { Component, OnInit } from '@angular/core';
import { HandymanService } from '../handyman.service';
import { OurServicesService } from 'src/app/our-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    customerForm: FormGroup;
    IdHandymanForDetails;

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
        this.customerForm = new FormGroup({
                'custo_name': new FormControl('',[Validators.required]),
                'custo_number': new FormControl('',[Validators.required]),
                    // , Validators.maxLength(10)
                                                    // Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
                'custo_address': new FormControl('',[Validators.required])
            });
        this.ourservicesservice.getServices()
                .subscribe(data=>{
                    this.ourservices= data.documents;
                });
        this.setData(this.handymanservice.getDataForListPage());
    }

    setData(serviceIdForListPage){
        this.ourservicesservice.getServices()
                .subscribe(data=>{
                    data.documents.forEach(element=>{
                        if(element._id === serviceIdForListPage){
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

    setIdForDetailsPage(data){
        this.IdHandymanForDetails= data;
        console.log(this.IdHandymanForDetails);
    }
    gotoDetailsPage(data){
        let entered:boolean = false;
        // let inserted:boolean = false;

        let customerName = data.custo_name;
        let customerContact = data.custo_number;
        let customerAddress = data.custo_address;

        console.log(customerName);
        console.log(customerContact);
        if (customerContact == null || customerContact == "" || customerName == null || customerName == "") {
          entered = false;
          alert("Please enter details to view information !");
        } else {
          entered = true;
        }
        
        if(entered){
            this.ourservicesservice.createCustomer(customerName,customerContact,this.IdHandymanForDetails, customerAddress);
            this.handymanservice.setDataForDetailPage(this.IdHandymanForDetails);
            this.router.navigate(['/details'],{relativeTo: this.route});
        }

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