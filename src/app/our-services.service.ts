import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { OurServiceModel } from "./our-services/ourservices.model";
import { HandymanModel } from './handyman/handyman.model';
import { environment } from 'src/environments/environment.prod';
// import { environment } from 'src/environments/environment';
import { element } from 'protractor';

const BACKEND_URL = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class OurServicesService {
  
  constructor(private http: HttpClient) { }    
  public handymans: HandymanModel[] = [];


  getServices(){
      return this.http.get<OurServiceModel[]>
      ('/assets/data/ourservice.json');
  }
    
  getHandyman(){
    return this.http
          .get<{message: string, handymans: any }>
          ( BACKEND_URL + "/handymans");
  }

  createCustomer(name: string, contactNumber: string, handymanId: string){
    console.log(name +" == " + contactNumber +" == "+ handymanId);
    
    const customerData = new FormData();
    customerData.append(name, "name");    
    customerData.append(contactNumber, "contactNumber");
    customerData.append(handymanId, "handymanId");

    customerData.forEach((element) => {
      console.log(element);      
    });

    this.http
        .post<{message: string, inserted: boolean, createdCustomer: any}>(
          "http://localhost:3000/api/customer",
          customerData
        )
        .subscribe(responseData=>{
          console.log("added custo");
          console.log(responseData.message);
          console.log(responseData.inserted);
          console.log(responseData.createdCustomer);          
        });
  }
        
  createHandyman(HandymanDetails: HandymanModel){
    const handymanData = new FormData();
    for (const key in HandymanDetails) {
      if (HandymanDetails.hasOwnProperty(key)
            && key != "_id" 
            ) {
        // console.log(key +"=>" + newHandymanDetails[key]);
        handymanData.append(key, HandymanDetails[key]);
      }
    }

    this.http
        .post<{message: string, handyman : HandymanModel}>(
          BACKEND_URL + "/handymans",
          handymanData
        )
        .subscribe(responseData=>{
          console.log(responseData.message);
          const handyman : HandymanModel = {
            _id: responseData.handyman._id,
            name: HandymanDetails.name,
            dob: HandymanDetails.dob,        
            img_url: responseData.handyman.img_url,
            contactNumber: HandymanDetails.contactNumber,
            aadharNumber: HandymanDetails.aadharNumber,
            serviceName: HandymanDetails.serviceName,
            serviceExperience: HandymanDetails.serviceExperience,
            city: HandymanDetails.city,
            state: HandymanDetails.state,
            isVerified: HandymanDetails.isVerified,
            rating: HandymanDetails.rating,
            ratingNumber: HandymanDetails.ratingNumber
          };
          this.handymans.push(handyman);
        });   
  }

  updateHandyman(newHandymanDetails: HandymanModel) {
    let handymanData: HandymanModel | FormData;
    if (typeof newHandymanDetails.img_url === "object") {
      handymanData = new FormData();
      for (const key in newHandymanDetails) {
        if (newHandymanDetails.hasOwnProperty(key)
        && key !== "_id"
              ) {
          // console.log(key +"=>" + newHandymanDetails[key]);
          handymanData.append(key, newHandymanDetails[key]);
        }
      }
    } else {
      handymanData = {
            _id: newHandymanDetails._id,
            name: newHandymanDetails.name,
            dob: newHandymanDetails.dob,
        
            img_url: newHandymanDetails.img_url,
            
            contactNumber: newHandymanDetails.contactNumber,
            aadharNumber: newHandymanDetails.aadharNumber,
            serviceName: newHandymanDetails.serviceName,
            serviceExperience: newHandymanDetails.serviceExperience,
            city: newHandymanDetails.city,
            state: newHandymanDetails.state,
            isVerified: newHandymanDetails.isVerified,
            rating: newHandymanDetails.rating,
            ratingNumber: newHandymanDetails.ratingNumber
      };
    }
    this.http
      .put(
         BACKEND_URL + "/handymans/"
        + newHandymanDetails._id, handymanData)
      .subscribe(response => {
        console.log(response);
        
        const updatedHandymans = [...this.handymans];
        const oldHandymanIndex = updatedHandymans.findIndex(h => h._id === newHandymanDetails._id);
        const handyman : HandymanModel = {
            _id: newHandymanDetails._id,
            name: newHandymanDetails.name,
            dob: newHandymanDetails.dob,
        
            img_url: newHandymanDetails.img_url,
            
            contactNumber: newHandymanDetails.contactNumber,
            aadharNumber: newHandymanDetails.aadharNumber,
            serviceName: newHandymanDetails.serviceName,
            serviceExperience: newHandymanDetails.serviceExperience,
            city: newHandymanDetails.city,
            state: newHandymanDetails.state,
            isVerified: newHandymanDetails.isVerified,
            rating: newHandymanDetails.rating,
            ratingNumber: newHandymanDetails.ratingNumber
        };
        updatedHandymans[oldHandymanIndex] = handyman;
        this.handymans = updatedHandymans;
      });
  }

  deleteHandyman(handymanId: string) {
    console.log(handymanId);
    
    this.http
      .delete
      ( BACKEND_URL + "/handymans/" + handymanId)
      .subscribe((response) => {
        console.log(response);
        
        const updatedHandymans = this.handymans.filter(handyman => handyman._id !== handymanId);
        this.handymans = updatedHandymans;
      });
  }

  


}