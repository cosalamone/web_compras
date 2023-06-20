import { Component } from '@angular/core';
import links from './nav-items';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  links = links;

  showFiller = false;
  usuarioLogueado = null;
  constructor(private router: Router, private authService: AuthService) {
    this.usuarioLogueado = this.authService.usuarioLogueado;
  }

  iniciarSesion(): void {
    this.router.navigate(['login'])
  }
}
