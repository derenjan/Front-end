import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivateChild, CanLoad, CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private helper: JwtHelperService
    ) {
    this.helper = new JwtHelperService();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const decodedToken = this.helper.decodeToken(this.auth.token);
      
      if (this.auth.token && !this.helper.isTokenExpired(this.auth.token)&&decodedToken.isAdmin) {
        return true;
      }
      else if(this.auth.token && !this.helper.isTokenExpired(this.auth.token)&& !decodedToken.isAdmin){
        return this.router.parseUrl('/dashboard');
      }
      return this.router.parseUrl('/auth/login');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {
      const decodedToken = this.helper.decodeToken(this.auth.token);
      
      if (this.auth.token && !this.helper.isTokenExpired(this.auth.token)&&decodedToken.isAdmin) {
        return true;
      }
      else if(this.auth.token && !this.helper.isTokenExpired(this.auth.token)&& !decodedToken.isAdmin){
        return this.router.parseUrl('/dashboard');
      }
      return this.router.parseUrl('/auth/login');
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      const decodedToken = this.helper.decodeToken(this.auth.token);
      
      if (this.auth.token && !this.helper.isTokenExpired(this.auth.token)&&decodedToken.isAdmin) {
        return true;
      }      
      return false
  }
  
}
