import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  text:String;
  mail:string

  constructor(
    private as:AdminService
  ) { }

  ngOnInit() {
  }
  sendMessage(){
    let data={
      email:this.mail,
      mess:this.text
    }
    this.as.sendMesage(data).subscribe((data)=>{
      console.log(data)
    })
  }

}
