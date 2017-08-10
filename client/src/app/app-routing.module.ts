import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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





const appRoutes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'superadmin',
        component:SuperAdminComponent,
        children:[
            {
                path:'dashboard',
                component:SaDashboardComponent
            },
            {
                path:'hospital',
                component:HospitalComponent,
                children:[
                    {
                        path:'add-hospital',
                        component:AddHospitalComponent
                    },
                    {
                        path:'add-branch',
                        component:AddBranchComponent
                    },
                    {
                        path:'add-branch/:id',
                        component:AddBranchComponent
                    }
                ]
            },
            {
                path:'user',
                component:UserComponent,
                children:[
                    {
                        path:'add-hospital-admin',
                        component:AddHospitalAdminComponent
                    },
                    {
                        path:'add-branch-admin',
                        component:AddBranchAdminComponent
                    },
                    {
                        path:'add-surgeon',
                        component:AddSurgeonComponent
                    },
                    {
                        path:'add-support-staff',
                        component:AddSupportStaffComponent
                    }
                ]
            },
            {
                path:'prosthesis',
                component:ProsthesisComponent
            },
            {
                path:'options',
                component:OptionsComponent
            }
        ]
    }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
