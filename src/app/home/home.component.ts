import { Component } from '@angular/core';
import links from './nav-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  links = links;

  showFiller = false;

  constructor(private router: Router) {}


  iniciarSesion(): void {
    this.router.navigate(['login'])
  }
}
