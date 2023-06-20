import { Component } from '@angular/core';
import links from './nav-items';
import { CarritoService } from '../services/carrito.service';
import { Subcategoria } from '../interfaces/subcategoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  links = links;

  showFiller = false;
  subcategoriasRecibidas: Subcategoria[] = []

  constructor(private carritoService: CarritoService) {

  }

  carrito = this.carritoService.canasto

  totalproductos: number = 0;

  calcularCantidadTotalEnCarrito() {
    this.totalproductos = 0
    this.carrito.forEach((item) => {

      this.totalproductos += item.cantidad

    })

    return this.totalproductos
  }



  logOut(): void {

  }

  filtroSelectedChanged(subcategorias: Subcategoria[]){
    this.subcategoriasRecibidas = subcategorias
  }
}
