import { Component, OnInit , OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import {HospitalService} from '../../services/hospital.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {

  

  constructor(
    private router:Router,
    private hospitalService:HospitalService,
  ) { 
      
  }

  

  logout(){
    this.router.navigate(['/']);
  }

  ngOnChanges() {
    console.log('Change happened');
  }

  ngOnInit() {
  }

}
