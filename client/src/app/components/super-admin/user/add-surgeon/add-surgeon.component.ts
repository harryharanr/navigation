import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../../services/hospital.service';

@Component({
  selector: 'app-add-surgeon',
  templateUrl: './add-surgeon.component.html',
  styleUrls: ['./add-surgeon.component.css']
})
export class AddSurgeonComponent implements OnInit {

  hospitalLists;
  hospitalBranches;
  showBranches = false;
  showAddSurgeonForm = false;

  constructor(
    private hospitalService:HospitalService
  ) { }

  branchId;

  surgeon = {
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

  showAddSurgeon(){
      this.showAddSurgeonForm = true;
  }

  createSurgeon(surgeon,hospitalId,branchId){
    this.hospitalService.addSurgeon(surgeon,hospitalId,branchId).subscribe(data => {
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
