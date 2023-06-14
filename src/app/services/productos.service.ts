import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>('https://static.compragamer.com/test/productos.json')
  }
}
