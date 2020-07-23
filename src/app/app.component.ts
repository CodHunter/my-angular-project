import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'claims-app';
  cStatus = true;

  constructor(private router: Router) {

  }

  goToDocument(): void {
    this.cStatus = false;
    this.router.navigate(['/document']);
    console.log('here');
  }

  goToClaim(): void {
    this.cStatus = true;
    this.router.navigate(['/status']);
  }
}

