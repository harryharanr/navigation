import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../../services/hospital.service';

@Component({
  selector: 'app-add-branch-admin',
  templateUrl: './add-branch-admin.component.html',
  styleUrls: ['./add-branch-admin.component.css']
})
export class AddBranchAdminComponent implements OnInit {


  hospitalLists;
  hospitalBranches;
  showBranches = false;
  showAddBranchAdminForm = false;

  constructor(
    private hospitalService:HospitalService
  ) { }

  branchId;

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

  getBranches(id){
    this.branchId = '';
    this.hospitalService.getBranches(id).subscribe(data => {
        this.hospitalBranches = data.message;
        console.log(this.hospitalBranches);
        this.showBranches = true;
    });
  }

  showAddBranchForm(){
      this.showAddBranchAdminForm = true;
  }

  createBranchAdmin(admin,hospitalId,branchId){
    console.log(admin);
    console.log(hospitalId);
    console.log(branchId);
    this.hospitalService.addBranchAdmin(admin,hospitalId,branchId).subscribe(data => {
        //console.log(data);
        if(data.success){
          console.log(data.message)
        } 
    });
  }

  ngOnInit() {
    this.getAllHospitals();
  }

}
