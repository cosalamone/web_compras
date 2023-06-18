import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemCarrito } from 'src/app/interfaces/itemCarrito';
import { CarritoService } from 'src/app/services/carrito.service';
import { ListaProductosComponent } from '../lista-productos/lista-productos.component';




@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})


export class CarritoComprasComponent {


  constructor(private carritoService: CarritoService) { }

  carrito = this.carritoService.canasto
}
