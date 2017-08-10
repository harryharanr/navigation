import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators , FormControl } from '@angular/forms';
import { HospitalService } from '../../services/hospital.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private hospitalService:HospitalService,
    private router:Router
  ) {
      this.createForm();
   }

   createForm() {
    this.form = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login(){

      const user = {
          username : this.form.get('username').value,
          password : this.form.get('password').value,
      }

      this.hospitalService.login(user).subscribe(data => {
        if(!data.success){
          console.log('Authentication failed!!');
        } else {
          this.hospitalService.storeUserData(data.token , data.user)
          this.router.navigate(['/superadmin/dashboard/']);
        }
      });
      
  }

  ngOnInit() {
    
  }

}
