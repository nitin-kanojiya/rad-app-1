import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandymanService {

  private idDataForList;
  private idDataForDetails;

  constructor() { }
  

  getdataForDetails(){
    return this.idDataForDetails;
  }
  setDataForDetail(dataForDetails){
    this.idDataForDetails = dataForDetails;
  }

  getDataForList(){
    return this.idDataForList;
  }

  setDataForList(dataForList){
    this.idDataForList= dataForList;
  }
  
}
