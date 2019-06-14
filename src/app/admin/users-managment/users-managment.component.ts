import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service"
import { MessageService } from 'primeng/primeng';

@Component({
  selector: 'app-users-managment',
  templateUrl: './users-managment.component.html',
  styleUrls: ['./users-managment.component.scss'],
  providers: [MessageService]
})
export class UsersManagmentComponent implements OnInit {
  users:any;
  user
  constructor(
    private as:AdminService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.getUsers()   
  }
  delReq(usr){
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'User Will be deleted'});
    this.user=usr
  }
  getUsers(){
   let sub= this.as.getUserslist().subscribe((data)=>{
      this.users=data
      console.log(data)
      sub.unsubscribe()
    })
  }
  reject(){
    this.messageService.clear()
  }
  deleteUser(id){
    this.as.deleteUser(id).subscribe((res)=>{
      this.reject()
      this.getUsers();
    
    })
  }

}
