import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service"

@Component({
  selector: 'app-users-managment',
  templateUrl: './users-managment.component.html',
  styleUrls: ['./users-managment.component.scss']
})
export class UsersManagmentComponent implements OnInit {
  users:any;
  display:Boolean=false;
  user
  constructor(private as:AdminService) { }

  ngOnInit() {
    this.getUsers()   
  }
  delReq(usr){
    console.log(usr)
    this.user=usr
    this.display=true
  }
  getUsers(){
   let sub= this.as.getUserslist().subscribe((data)=>{
      this.users=data
      console.log(data)
      sub.unsubscribe()
    })
  }
  deleteUser(id){
    this.as.deleteUser(id).subscribe((res)=>{
      this.display=false;
      this.getUsers();
    
    })
  }

}
