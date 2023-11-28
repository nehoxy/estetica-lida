import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomFilterPipe } from './components/card-producto/custom-filter';
import { NgxPaginationModule } from 'ngx-pagination';
// Material





@NgModule({
  declarations: [
    CardProductoComponent,
    PaginationComponent,
    ProductosComponent,
    CustomFilterPipe
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  exports:[
    MatDialogModule
  ]
})
export class ProductosModule { }
