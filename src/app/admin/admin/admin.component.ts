import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
  <app-header></app-header>
  <app-sidenav>  
    <router-outlet></router-outlet>
  </app-sidenav>
  
  `,
  styles: []
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
