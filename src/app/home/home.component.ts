import { Component, ViewChild } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Subcategoria } from '../interfaces/subcategoria';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav


  subcategoriasRecibidas: Subcategoria[] = []

  constructor(private carritoService: CarritoService,
   private observer: BreakpointObserver ) {

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


  filtroSelectedChanged(subcategorias: Subcategoria[]){
    this.subcategoriasRecibidas = subcategorias
  }
}
