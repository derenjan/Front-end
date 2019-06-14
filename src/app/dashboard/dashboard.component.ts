import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-head></app-head>
    <app-navbar></app-navbar>
    <app-sidebar>
      <router-outlet></router-outlet>
    </app-sidebar>`,
  styles: [``]
})
export class DashboardComponent {

}
