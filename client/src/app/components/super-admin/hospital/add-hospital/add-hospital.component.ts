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


  ngOnInit() {
    this.getAllHospitals();
  }

}
