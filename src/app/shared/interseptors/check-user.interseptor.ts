import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class CheckUserInterseptor implements HttpInterceptor {
    

  intercept(req: HttpRequest<any>, next: HttpHandler){      
    const authToken="Bearer "+localStorage.getItem("token")
    let newReq=req.clone({
        
        headers: req.headers.set('Authorization', authToken)
    })
    return next.handle(newReq);
  }
}