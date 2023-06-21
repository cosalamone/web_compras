import { Component, ViewChild } from '@angular/core';
import { Subcategoria } from '../interfaces/subcategoria';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav


  subcategoriasRecibidas: Subcategoria[] = []
  usuarioLogueado = null;

  constructor(private carritoService: CarritoService,
   private observer: BreakpointObserver,
   private router: Router, 
   private authService: AuthService ) {
    this.usuarioLogueado = this.authService.usuarioLogueado;
  }

  carrito = this.carritoService.canasto

  totalproductos: number = 0;

  calcularCantidadTotalEnCarrito() {
    this.totalproductos = 0
    this.carrito.forEach((item:any) => {

      this.totalproductos += item.cantidad

    })

    return this.totalproductos
  }


  filtroSelectedChanged(subcategorias: Subcategoria[]){
    this.subcategoriasRecibidas = subcategorias
  }
  
  iniciarSesion(): void {
    this.router.navigate(['login'])
  }
}
