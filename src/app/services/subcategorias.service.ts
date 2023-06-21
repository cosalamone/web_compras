import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subcategoria } from '../interfaces/subcategoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriasService {

  constructor(private http: HttpClient) { }

  getSubcategorias(): Observable<Subcategoria[]>{
    return this.http.get<Subcategoria[]>('https://static.compragamer.com/test/subcategorias.json')
  }




}
