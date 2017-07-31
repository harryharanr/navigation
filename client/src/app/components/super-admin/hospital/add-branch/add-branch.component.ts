import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute,NavigationEnd } from '@angular/router';
import { HospitalService } from '../../../../services/hospital.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit  {

  previousUrl;
  currentUrl;
  branchForm;
  branches;
  singleHospital;
  selectHospital ;
  hospitalLists;
  
  
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private hospitalService:HospitalService,
    private router:Router
  ) { 
      this.createForm();

      // this.router.events.pairwise().subscribe((event) => {
      //       console.log(event);
      //   });

      // router.events
      //   .filter(event => event instanceof NavigationEnd).subscribe(e => {
      //   this.previousUrl = e;
      //   console.log(this.previousUrl);
      // });

      // router.events
      //   .filter(e => e instanceof NavigationEnd)
      //   .pairwise().subscribe((e) => {
      //       console.log(e);
      //   });
      
  }

  //Create form
  createForm(){
    this.branchForm = this.formBuilder.group({
      branchName:''
    });
  }

  //Function to submit branch Form
  onBranchRegister(id){
    const branch = {
        branchName : this.branchForm.get('branchName').value
    };

    this.hospitalService.addBranch(id,branch).subscribe(data => {
      this.getBranches();
    }); 
  }

  loadSingleHospital(id){
    this.hospitalService.getSingleHospital(id).subscribe(data => {
        this.singleHospital = data.message;
    });   
  }

  getBranches(){
    this.hospitalService.getBranches(this.currentUrl.id).subscribe(data => {
      this.branches = data.message.branchDetails;
      console.log(this.branches);
    });
  }

  getAllHospitals(){
    this.hospitalService.getHospitals().subscribe(data => {
      this.hospitalLists = data.message;      
    });
  }

  // addBranch(id){
  //   console.log(id);
  //   this.selectHospital = false;
  //   this.currentUrl = this.activatedRoute.snapshot.params;
  //   console.log(this.currentUrl);
  //   this.currentUrl.id = id;
  //   console.log(this.currentUrl.id);
  // }

  addBranch(id){
    
    //this.currentUrl = this.activatedRoute.snapshot.params;
    //this.currentUrl.id = id;
    this.router.navigate(['/superadmin/hospital/add-branch', id]);
    window.location.reload();
    
  }

  ngOnInit() {
    
      this.currentUrl = this.activatedRoute.snapshot.params;
    
      if(this.currentUrl.id == "undefined"){
        this.selectHospital = true;
        this.getAllHospitals();
      } else {
        this.selectHospital = false;
      }
    
      this.loadSingleHospital(this.currentUrl.id);
      this.getBranches();
  }

}
