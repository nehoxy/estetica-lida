import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PanelComponent } from './components/panel/panel.component';
import { TablaVentasAdministradorComponent } from './components/tabla-ventas-administrador/tabla-ventas-administrador.component';
import { FormServiciosAdminComponent } from './components/form-servicios-admin/form-servicios-admin.component';
import { FormProductosAdminComponent } from './components/form-productos-admin/form-productos-admin.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataTablesModule } from "angular-datatables";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [

        AdministradorComponent,
        PanelComponent,
        FormServiciosAdminComponent,
        FormProductosAdminComponent,
        TablaVentasAdministradorComponent,

  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MatTabsModule,
    
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MatTabsModule,
   MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    DataTablesModule
  ]
})
export class AdministradorModule { }
