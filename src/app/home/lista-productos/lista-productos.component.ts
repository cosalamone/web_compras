import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent {


  productos: Producto[] = [];

  rutaImg = 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_'

  constructor(private productosService: ProductosService) {

    this.productosService.getProductos().subscribe(
      (dataParoductos) => {
        this.productos = dataParoductos;


      }
    )

  }


  // ruta para las imagenes es: https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_ + {{producto.imagen.nombre}}

  numero: number = 1 // TO-DO que el number máximo se considere en base al stock de X producto

  counterAdd() {
    
    return (this.numero = this.numero + 1)
  }

  counterMinus() {

    if(this.numero > 0) {
      (this.numero = this.numero - 1)
    } else this.numero = 0
    
  }
}
