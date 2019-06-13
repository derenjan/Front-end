import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersManagmentComponent } from './users-managment/users-managment.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import { AdminComponent } from './admin/admin.component'
import {AdminService} from './admin.service'

@NgModule({
  declarations: [UsersManagmentComponent, SidenavComponent, HeaderComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers:[AdminService]

})
export class AdminModule { }
