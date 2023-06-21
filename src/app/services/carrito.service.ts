import { Injectable } from '@angular/core';
import { ItemCarrito } from '../interfaces/itemCarrito';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  canasto: ItemCarrito[] = [];
}
