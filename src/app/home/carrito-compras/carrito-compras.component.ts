import { Component, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';




@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})


export default class CarritoComprasComponent {

  constructor(private carritoService: CarritoService) { }


  carrito = this.carritoService.canasto



  costoCarrito() {
    let total: number = 0;

    this.carrito.forEach((item) => {
      total += item.producto.precio * item.cantidad
    })

    return total
  }

  vaciarCarrito() {
    this.carrito = [];
  }

}
