import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PanelUserComponent } from './components/panel-user/panel-user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';
import { MisServiciosComponent } from './components/mis-servicios/mis-servicios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PerfilComponent,
    PanelUserComponent,
    DatosPersonalesComponent,
    MisComprasComponent,
    MisServiciosComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PerfilModule { }
