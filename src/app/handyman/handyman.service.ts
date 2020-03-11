import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandymanService {

  private serviceIdForListPage;
  private idDataForDetailsPage;

  constructor() { }
  

  getdataForDetailsPage(){
    return this.idDataForDetailsPage;
  }
  setDataForDetailPage(IdofHandyMan){
    this.idDataForDetailsPage = IdofHandyMan;
    console.log(this.idDataForDetailsPage);    
  }

  getDataForListPage(){
    return this.serviceIdForListPage;
  }
  setDataForListPage(IdofService){
    this.serviceIdForListPage = IdofService;
  }
  
}
