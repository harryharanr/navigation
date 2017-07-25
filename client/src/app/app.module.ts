import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { SuperAdminComponent } from './components/super-admin/super-admin.component';

import { SaDashboardComponent } from './components/super-admin/sa-dashboard/sa-dashboard.component';
import { HospitalComponent } from './components/super-admin/hospital/hospital.component';
import { UserComponent } from './components/super-admin/user/user.component';
import { ProsthesisComponent } from './components/super-admin/prosthesis/prosthesis.component';
import { OptionsComponent } from './components/super-admin/options/options.component';

import { AddHospitalComponent } from './components/super-admin/hospital/add-hospital/add-hospital.component';
import { AddBranchComponent } from './components/super-admin/hospital/add-branch/add-branch.component';

import { AddHospitalAdminComponent } from './components/super-admin/user/add-hospital-admin/add-hospital-admin.component';
import { AddBranchAdminComponent } from './components/super-admin/user/add-branch-admin/add-branch-admin.component';
import { AddSurgeonComponent } from './components/super-admin/user/add-surgeon/add-surgeon.component';
import { AddSupportStaffComponent } from './components/super-admin/user/add-support-staff/add-support-staff.component';

import {HospitalService} from './services/hospital.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuperAdminComponent,
    SaDashboardComponent,
    HospitalComponent,
    UserComponent,
    ProsthesisComponent,
    OptionsComponent,
    AddHospitalComponent,
    AddBranchComponent,
    AddHospitalAdminComponent,
    AddBranchAdminComponent,
    AddSurgeonComponent,
    AddSupportStaffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HospitalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
