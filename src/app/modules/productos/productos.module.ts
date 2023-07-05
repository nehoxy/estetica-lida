import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    BusquedaComponent,
    CardProductoComponent,
    PaginationComponent,
    ProductosComponent,
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,

  ]
})
export class ProductosModule { }
