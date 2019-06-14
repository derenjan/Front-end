import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{environment} from '../../environments/environment'
@Injectable()
export class AdminService {

  constructor(
    private http:HttpClient
  ) { }
    
    getUserslist(){
      return this.http.get(`${environment.apiUrl}/api/admin/users`)
    }
    sendMesage(data){
      return this.http.post(`${environment.apiUrl}/api/admin/users/email`,data)
    }

}
