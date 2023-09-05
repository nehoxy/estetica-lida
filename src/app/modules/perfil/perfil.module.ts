import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PanelUserComponent } from './components/panel-user/panel-user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';



@NgModule({
  declarations: [
    PerfilComponent,
    PanelUserComponent,
    DatosPersonalesComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    MatTabsModule
  ]
})
export class PerfilModule { }
