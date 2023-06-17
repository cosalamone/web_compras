import { Component } from '@angular/core';
import { ItemCarrito } from 'src/app/interfaces/itemCarrito';
import { Producto } from 'src/app/interfaces/producto';
import { Subcategoria } from 'src/app/interfaces/subcategoria';
import { ProductosService } from 'src/app/services/productos.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent {


  listaProductos: Producto[] = [];
  subcategorias: Subcategoria[] = [];

  carrito: ItemCarrito[] = [];

  rutaImg = 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_'

  constructor(private productosService: ProductosService,
    private subcategoriasService: SubcategoriasService) {

    this.productosService.getProductos().subscribe(
      (dataProductos) => {
        this.listaProductos = dataProductos;


        this.subcategoriasService.getSubcategorias().subscribe(
          (dataSubcategorias) => {
            this.subcategorias = dataSubcategorias;
          }
        )

      }
    )


  }

 

 cantidadDeProductoEnCarrito(prodId: number) {
    let cantidadEnCarrito = this.carrito.find(prod => prodId == prod.producto.id_producto)?.cantidad ?? 0
    return cantidadEnCarrito
  }


  counterAdd(prodId: number) { 

    let item = this.carrito.find(prod => prodId == prod.producto.id_producto);

    if(item && item.producto.stock > item.cantidad){
      item.cantidad++;
    }
    else{
      let producto = this.listaProductos.find(p=>p.id_producto === prodId);

      if(producto && producto.stock > 0){
        let itemCarrito: ItemCarrito = {producto, cantidad: 1}
        this.carrito.push(itemCarrito);
      }
    }
  }

  counterMinus(prodId: number) {

    let item = this.carrito.find(prod => prodId == prod.producto.id_producto);
    if(item){
      item.cantidad--;

      if(item.cantidad === 0){
        this.carrito = this.carrito.filter(x=>x.producto.id_producto !== prodId)
      }
    }
  
  }
}
