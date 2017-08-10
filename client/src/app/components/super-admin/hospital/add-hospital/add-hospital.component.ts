import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalService } from '../../../../services/hospital.service';


@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})

export class AddHospitalComponent implements OnInit {

  form;
  
  hospitalLists;
  newHospital;
  hospitalDetails;
  branchDetails;

  constructor(
    private formBuilder: FormBuilder,
    private hospitalService: HospitalService,
    private router: Router
  ) { 
    this.createForm();
  }

  //Create form
  createForm(){
    this.form = this.formBuilder.group({
      hospitalName:'',
      hospitalEmail:'',
      hospitalWebsite:''
    });
  }

  // Function to submit form
  onHospitalRegister(){
    const hospital = {
      hospitalName: this.form.get('hospitalName').value,
      hospitalEmail: this.form.get('hospitalEmail').value,
      hospitalWebsite: this.form.get('hospitalWebsite').value
    };
    this.hospitalService.addHospital(hospital).subscribe(data => {
      this.newHospital = data.message;
      this.getAllHospitals();
    });

  }

  // Get all hospitals 
  getAllHospitals(){
    this.hospitalService.getHospitals().subscribe(data => {
      this.hospitalLists = data.message;      
    });
  }

  //manageBranch
  manageBranch(id){
    //this.hospitalService.getSingleHospital(id);
    this.router.navigate(['/superadmin/hospital/add-branch/'+id]);
    // this.hospitalService.getSingleHospital(id).subscribe(data => {
    //   if(data){
    //     this.router.navigate(['/superadmin/hospital/add-branch']);
    //   }
    // });
    //this.router.navigate(['/superadmin/hospital/add-branch']);
  }

  // manageBranch(id){
  //   this.getAllHospitals();
  //   this.hospitalService.getSingleHospital(id).subscribe(data => {
  //       this.hospitalDetails = data.message;
  //   });
  //   //this.router.navigate(['/superadmin/hospital/add-branch']);
  // }

  // addBranch(id){
  //   const branch = {
  //       branchName : this.branchForm.get('branchName').value,
  //       branchEmail : this.branchForm.get('branchEmail').value
  //   };

  //   this.hospitalService.addBranch(id,branch).subscribe(data => {
  //     console.log(data);
  //     this.getAllHospitals();
  //     //window.location.reload();
  //   });   

  // }

  ngOnInit() {
    this.getAllHospitals();
  }

}
