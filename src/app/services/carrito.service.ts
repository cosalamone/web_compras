import { Injectable } from '@angular/core';
import { ItemCarrito } from '../interfaces/itemCarrito';
import { ProductosService } from './productos.service';
import { Producto } from '../interfaces/producto';
import { ListaProductosComponent } from '../home/lista-productos/lista-productos.component';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  canasto: ItemCarrito[] = [];


  listaProductos: Producto[] = []

  constructor(private productosService: ProductosService) { 
  
    this.productosService.getProductos().subscribe((prod)=> this.listaProductos=prod)

  }

  agregarProducto(prodId: number, cantPorAgregar: number){


    

  }
}
