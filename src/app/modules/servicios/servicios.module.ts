import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { BusquedaComponent } from './component/busqueda/busqueda.component';
import { CardServicioComponent } from './component/card-servicio/card-servicio.component';


@NgModule({
  declarations: [
    ServiciosComponent,
    PaginationComponent,
    BusquedaComponent,
    CardServicioComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
