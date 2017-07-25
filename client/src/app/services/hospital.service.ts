import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HospitalService {

  domain = "http://localhost:8080/"; // Development Domain - Not Needed in Production
  hospital;

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
  
}

