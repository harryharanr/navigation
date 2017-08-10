import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HospitalService {

  domain = "http://localhost:8080/"; // Development Domain - Not Needed in Production
  hospital;
  singleHospital;
  singleHospitalData;
  authToken;
  user;

  constructor(
    private http: Http
  ) { }

  //Login
  login(user){
    return this.http.post(this.domain+'authentication/login',user).map(res => res.json());
  }

  storeUserData(token,user){
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

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

  addAdmin(admin,hospitalName,hospitalId){
    const adminData = {
      id:hospitalId,
      hospitalName:hospitalName,
      adminName:admin.name,
      adminUsername:admin.username,
      adminPassword:admin.password
    }
    return this.http.post(this.domain + 'authentication/addHospitalAdmin', adminData ).map(res => res.json());
  }

  addBranchAdmin(admin,hospitalId,branchId){
    const adminData = {
      hospitalId:hospitalId,
      branchId:branchId,
      adminName:admin.name,
      adminUsername:admin.username,
      adminPassword:admin.password
    }
    return this.http.post(this.domain + 'authentication/addBranchAdmin', adminData ).map(res => res.json());
  }

  addSurgeon(surgeon,hospitalId,branchId){
    const surgeonData = {
      hospitalId:hospitalId,
      branchId:branchId,
      surgeonName:surgeon.name,
      surgeonUsername:surgeon.username,
      surgeonPassword:surgeon.password
    }
    return this.http.post(this.domain + 'authentication/addSurgeon', surgeonData ).map(res => res.json());
  }

  addSupportStaff(supportStaff,hospitalId,branchId){
    const supportStaffData = {
      hospitalId:hospitalId,
      branchId:branchId,
      supportStaffName:supportStaff.name,
      supportStaffUsername:supportStaff.username,
      supportStaffPassword:supportStaff.password
    }
    return this.http.post(this.domain + 'authentication/addSupportStaff', supportStaffData ).map(res => res.json());
  }

  
  
}

