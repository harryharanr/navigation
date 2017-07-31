import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HospitalService {

  domain = "http://localhost:8080/"; // Development Domain - Not Needed in Production
  hospital;
  singleHospital;
  singleHospitalData;

  constructor(
    private http: Http
  ) { }

  // Function to register hospital
  addHospital(hospital) {
    return this.http.post(this.domain + 'authentication/addHospital', hospital).map(res => res.json());
  }

  //Function to get all HospitalService
  getHospitals(){
      return this.http.get(this.domain + 'authentication/getHospitals').map(res => res.json());
  }

  getSingleHospital(id){
      return this.http.get(this.domain + 'authentication/getSingleHospital/'+id).map(res => res.json());
    // this.singleHospital = this.http.get(this.domain + 'authentication/getSingleHospital/'+id).map(res => 
    //                 {
    //                    let responsePayload = res.json();
    //                    this.singleHospitalData = res.json();
    //                    console.log(this.singleHospitalData);
    //                    return responsePayload;
    //                 }
    // );
    // return this.singleHospital;
  }

  getBranches(id){
      return this.http.get(this.domain + 'authentication/getSingleHospital/'+id).map(res => res.json())
  }

  addBranch(id,branch){
    
    const branchData = {
      id:id,
      branch:branch
    }

    return this.http.post(this.domain + 'authentication/addBranch', branchData ).map(res => res.json());
  }
  
}

