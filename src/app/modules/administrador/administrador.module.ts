import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { PanelComponent } from './components/panel/panel.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AdministradorComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule
  ]
})
export class AdministradorModule { }
