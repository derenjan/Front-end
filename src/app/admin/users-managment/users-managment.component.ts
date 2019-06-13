import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service"

@Component({
  selector: 'app-users-managment',
  templateUrl: './users-managment.component.html',
  styleUrls: ['./users-managment.component.scss']
})
export class UsersManagmentComponent implements OnInit {
  users:any;
  constructor(private as:AdminService) { }

  ngOnInit() {
    this.as.getUserslist().subscribe((data)=>{
      this.users=data
      console.log(data)
    })
  }

}
