import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class ListaProductosComponent implements OnChanges {


  todosLosProductos: Producto[] = [];
  listaProductos: Producto[] = [];
  subcategorias: Subcategoria[] = [];


  rutaImg = 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_'
  nombreCategorias: Subcategoria[] = []

  @Input() subcategoriasFiltradas: Subcategoria[] = [];

  constructor(private productosService: ProductosService,
    private subcategoriasService: SubcategoriasService,
    private carritoService: CarritoService,
  ) {

    this.productosService.getProductos().subscribe(
      (dataProductos) => {
        this.todosLosProductos = dataProductos;


        this.subcategoriasService.getSubcategorias().subscribe(dataSubcat => {
          this.subcategorias = dataSubcat;
          let subcategoriasMap: any = {};

          // Armo un array con todos los nombres de las subcategorias, donde el idSubCategoria es la posicion
          // Asi despues por cada producto accedo al nombre de subcategoria sin tener que hacer una busqueda.
          this.subcategorias.forEach(subcategoria => {
            subcategoriasMap[subcategoria.id] = subcategoria.nombre
          })

          this.todosLosProductos.forEach(producto => {
            const subcategoriaId = producto.id_subcategoria;
            const nombreSubc = subcategoriasMap[subcategoriaId];
            producto.nombreSubcategoria = nombreSubc;
          })


          this.listaProductos = this.todosLosProductos;


        })
      }
    )

  }

  // Actualización de listaProdutos s/ las subcategorías filtradas
  ngOnChanges(changes: SimpleChanges): void {

    if (this.subcategoriasFiltradas && this.subcategoriasFiltradas.length > 0) {
      this.listaProductos = this.todosLosProductos.filter(x => this.subcategoriasFiltradas.some(s => s.id == x.id_subcategoria))
    }
    else {
      this.listaProductos = this.todosLosProductos;
    }

  }




  cantidadDeProductoEnCarrito(prodId: number) {
    let cantidadEnCarrito = this.carritoService.canasto.find(prod => prodId == prod.producto.id_producto)?.cantidad ?? 0
    return cantidadEnCarrito
  }


  counterAdd(prodId: number) {

    let item = this.carritoService.canasto.find(prod => prodId == prod.producto.id_producto);
    if (item) {
      if (item.producto.stock > item.cantidad) {
        item.cantidad++;
      }
    } else {
      let producto = this.todosLosProductos.find(p => p.id_producto === prodId);

      if (producto && producto.stock > 0) {
        let itemCarrito: ItemCarrito = { producto, cantidad: 1 }
        this.carritoService.canasto.push(itemCarrito);
      }
    }
    console.log(this.carritoService.canasto)

  }

  counterMinus(prodId: number) {

    let item = this.carritoService.canasto.find(prod => prodId == prod.producto.id_producto);
    if (item) {
      item.cantidad--;

      if (item.cantidad === 0) {
        let index = this.carritoService.canasto.indexOf(item)
        this.carritoService.canasto.splice(index, 1)
      }
    }
    console.log(this.carritoService.canasto)

  }


}
