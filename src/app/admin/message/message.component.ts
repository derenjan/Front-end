import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service'
import { validate } from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  text:String;
  mail:string;
  msgs=[]
  constructor(
    private as:AdminService
  ) { }

  ngOnInit() {
  }
  validateMail(m){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(m).toLowerCase());    
  }

  sendMessage(){
    if(!this.mail || !this.validateMail(this.mail)){
      this.msgs=[]
      this.msgs.push({severity:'error', summary:'Error', detail:'Please write correct Email'})
    }
    else{
      let data={
        email:this.mail,
        mess:this.text
      }
      this.as.sendMesage(data).subscribe((data)=>{
        this.text="";
        this.mail=""
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success', detail:'Mail was sent succesfully'});                   
      },
      (err)=>{
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error', detail:err.error}); 
      })

    }
    
  }

}
