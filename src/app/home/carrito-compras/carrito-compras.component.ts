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

  costoCarrito(){
    let total:number = 0;

    this.carrito.forEach((item)=>{
      total+= item.producto.precio * item.cantidad
    })

    return total
  }

}
