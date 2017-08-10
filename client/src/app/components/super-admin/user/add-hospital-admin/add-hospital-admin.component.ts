import { Component, OnInit } from '@angular/core';

import { HospitalService } from '../../../../services/hospital.service';

@Component({
  selector: 'app-add-hospital-admin',
  templateUrl: './add-hospital-admin.component.html',
  styleUrls: ['./add-hospital-admin.component.css']
})
export class AddHospitalAdminComponent implements OnInit {

  hospitalLists;

  showAddAdminForm = false;
  hospitalName;
  hospitalId;
  hospitalAdminUsername;
  hospitalAdminPassword;
  
  constructor(
    private hospitalService:HospitalService
  ) { }

  admin = {
    name:'',
    username:'',
    password:''
  }

  getAllHospitals(){
    this.hospitalService.getHospitals().subscribe(data => {
      this.hospitalLists = data.message;      
    });
  }

  getHospitalName(name,id){
    console.log(name + ' '+ id);
    this.showAddAdminForm = true;
    this.hospitalName = name;
    this.hospitalId = id;
  }

  createAdmin(admin,hospitalName,hospitalId){
    console.log(admin);
    console.log(hospitalName);
    console.log(hospitalId);
    this.hospitalService.addAdmin(admin,hospitalName,hospitalId).subscribe(data => {
        console.log(data);
        if(data.success){
          this.showAddAdminForm = false;
        } 
    });
  }

  ngOnInit() {
    this.getAllHospitals();
  }

}


