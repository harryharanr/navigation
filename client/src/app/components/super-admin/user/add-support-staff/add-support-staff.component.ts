import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../../services/hospital.service';

@Component({
  selector: 'app-add-support-staff',
  templateUrl: './add-support-staff.component.html',
  styleUrls: ['./add-support-staff.component.css']
})
export class AddSupportStaffComponent implements OnInit {

  hospitalLists;
  hospitalBranches;
  showBranches = false;
  showAddSupportStaffForm = false;

  constructor(
    private hospitalService:HospitalService
  ) { }

  branchId;

  supportstaff = {
    name:'',
    username:'',
    password:''
  }

  getAllHospitals(){
    this.hospitalService.getHospitals().subscribe(data => {
        this.hospitalLists = data.message;
    });
  }

  getBranches(id){
    this.branchId = '';
    this.hospitalService.getBranches(id).subscribe(data => {
        this.hospitalBranches = data.message;
        console.log(this.hospitalBranches);
        this.showBranches = true;
    });
  }

  showAddSupportStaff(){
      this.showAddSupportStaffForm = true;
  }

  createSupportStaff(supportStaff,hospitalId,branchId){
    
    this.hospitalService.addSupportStaff(supportStaff,hospitalId,branchId).subscribe(data => {
        //console.log(data);
        if(data.success){
          console.log(data.message);
        } 
    });
  }

  ngOnInit() {
    this.getAllHospitals();
  }

}
