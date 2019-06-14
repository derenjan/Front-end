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
import {FormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [UsersManagmentComponent, SidenavComponent, HeaderComponent, AdminComponent, MessageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EditorModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ToastModule

  ],
  providers:[AdminService]

})
export class AdminModule { }
