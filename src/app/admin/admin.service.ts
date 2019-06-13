import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{environment} from '../../environments/environment'
import { map,filter } from 'rxjs/operators';

@Injectable()
export class AdminService {

  constructor(
    private http:HttpClient
  ) { }
    
    getUserslist(){
      return this.http.get(`${environment.apiUrl}/api/admin/users`)
    }

}
