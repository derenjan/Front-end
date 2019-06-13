import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component'
import {UsersManagmentComponent} from './users-managment/users-managment.component'
const routes: Routes = [
  {
    path:"",
    component:AdminComponent,
    children:[
      {
        path:"",
        pathMatch:"full",
        component:UsersManagmentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
