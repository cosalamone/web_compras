import { Component } from '@angular/core';
import { ItemCarrito } from 'src/app/interfaces/itemCarrito';
import { Producto } from 'src/app/interfaces/producto';
import { Subcategoria } from 'src/app/interfaces/subcategoria';
import { CarritoService } from 'src/app/services/carrito.service';
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

  // carrito: ItemCarrito[] = []; // deberia estar en carrito - 

  rutaImg = 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_'

  constructor(private productosService: ProductosService,
    private subcategoriasService: SubcategoriasService,
    private carritoService: CarritoService) {

    this.productosService.getProductos().subscribe(
      (dataProductos) => {
        this.listaProductos = dataProductos;


       // TO-DO SUBCATEGORIAS

      }
    )


  }

 

 cantidadDeProductoEnCarrito(prodId: number) {
    let cantidadEnCarrito = this.carritoService.canasto.find(prod => prodId == prod.producto.id_producto)?.cantidad ?? 0
    return cantidadEnCarrito
  }


  counterAdd(prodId: number) { 

    let item = this.carritoService.canasto.find(prod => prodId == prod.producto.id_producto);

    if(item && item.producto.stock > item.cantidad){
      item.cantidad++;
    }
    else{
      let producto = this.listaProductos.find(p=>p.id_producto === prodId);

      if(producto && producto.stock > 0){
        let itemCarrito: ItemCarrito = {producto, cantidad: 1}
        this.carritoService.canasto.push(itemCarrito);
      }
    }

    console.log(this.carritoService.canasto)
  }

  counterMinus(prodId: number) {

    let item = this.carritoService.canasto.find(prod => prodId == prod.producto.id_producto);
    if(item){
      item.cantidad--;

      if(item.cantidad === 0){
        this.carritoService.canasto = this.carritoService.canasto.filter(x=>x.producto.id_producto !== prodId)
      }
    }
    console.log(this.carritoService.canasto)

  }

  
}
