import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersManagmentComponent } from './users-managment/users-managment.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {HeaderComponent} from './header/header.component';
import { AdminComponent } from './admin/admin.component'
import {AdminService} from './admin.service';
import { MessageComponent } from './message/message.component'
import {EditorModule} from 'primeng/editor';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [UsersManagmentComponent, SidenavComponent, HeaderComponent, AdminComponent, MessageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EditorModule,
    ButtonModule,
    FormsModule
  ],
  providers:[AdminService]

})
export class AdminModule { }
