import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { BusquedaComponent } from './component/busqueda/busqueda.component';
import { CardServicioComponent } from './component/card-servicio/card-servicio.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconButton } from '@angular/material/button';
@NgModule({
  declarations: [
    ServiciosComponent,
    PaginationComponent,
    BusquedaComponent,
    CardServicioComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconButton
  ],
  exports:[
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ServiciosModule { }
