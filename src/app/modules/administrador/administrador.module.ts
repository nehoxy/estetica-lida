import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PanelComponent } from './components/panel/panel.component';
import { TablaVentasAdministradorComponent } from './components/tabla-ventas-administrador/tabla-ventas-administrador.component';
import { FormServiciosAdminComponent } from './components/form-servicios-admin/form-servicios-admin.component';




@NgModule({
  declarations: [

        AdministradorComponent,
        PanelComponent,
        FormServiciosAdminComponent

  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MatTabsModule,
    TablaVentasAdministradorComponent
   
  ]
})
export class AdministradorModule { }
