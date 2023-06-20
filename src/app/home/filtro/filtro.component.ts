import { Component, EventEmitter, Output } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Producto } from 'src/app/interfaces/producto';
import { Subcategoria } from 'src/app/interfaces/subcategoria';
import { ProductosService } from 'src/app/services/productos.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';




@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {

  subcategorias: Subcategoria[] = [];
  subcategoriasSeleccionadas:Subcategoria[] = [];

  @Output() selectedSubcategoriasChanged = new EventEmitter()


  constructor(private subcategoriaService: SubcategoriasService,
    private productosService: ProductosService) {



    this.subcategoriaService.getSubcategorias().subscribe((data) => {
      this.subcategorias = data.sort(
        (a,b) => a.nombre < b.nombre ? -1 : 1
        
        )

    }
    )


  }

  filtroSubcategoriaChanged(subcategoriasSeleccionadas:MatListOption[]){
    this.subcategoriasSeleccionadas = subcategoriasSeleccionadas.map(x=>x.value);
    this.selectedSubcategoriasChanged.emit(this.subcategoriasSeleccionadas);

  }

}
