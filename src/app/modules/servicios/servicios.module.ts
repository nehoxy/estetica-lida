import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CardServicioComponent } from './components/card-servicio/card-servicio.component';
import { ModalSaberMasComponent } from './components/modal-saber-mas/modal-saber-mas.component';


@NgModule({
  declarations: [
    ServiciosComponent,
    CardServicioComponent,
    ModalSaberMasComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
