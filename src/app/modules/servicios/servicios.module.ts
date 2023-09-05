import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CardServicioComponent } from './components/card-servicio/card-servicio.component';
import { ModalSaberMasComponent } from './components/modal-saber-mas/modal-saber-mas.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { BusquedaComponent } from './component/busqueda/busqueda.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ServiciosComponent,
    CardServicioComponent,
    ModalSaberMasComponent,
    PaginationComponent,
    BusquedaComponent,
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ServiciosModule { }
