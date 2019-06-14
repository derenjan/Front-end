import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component'
import {UsersManagmentComponent} from './users-managment/users-managment.component'
import { MessageComponent } from './message/message.component'
const routes: Routes = [
  {
    path:"",
    component:AdminComponent,
    children:[
      {
        path:"",
        pathMatch:"full",
        redirectTo:"users management"
        
      },
      {
        path:"users management",
        component:UsersManagmentComponent,

      },
      {
        path:'messages',
        component:MessageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
