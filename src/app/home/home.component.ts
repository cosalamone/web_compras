import {Component, ViewChild} from '@angular/core';
import links from './nav-items';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  links = links;

  showFiller = false;

  constructor(private carritoService: CarritoService) { }

  carrito = this.carritoService.canasto

  logOut(): void {
   
  }
}
