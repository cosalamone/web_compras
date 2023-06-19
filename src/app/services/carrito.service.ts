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
}
