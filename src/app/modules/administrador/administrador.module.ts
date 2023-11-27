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
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FlatpickrDefaults} from 'angularx-flatpickr'
import { CustomFilterPipe } from './pipes/custom-filter';
import { UsuariosComponent } from './components/usuarios/usuarios.component';






@NgModule({
  declarations: [

        AdministradorComponent,
        PanelComponent,
        FormServiciosAdminComponent,
        FormProductosAdminComponent,
        TablaVentasAdministradorComponent,
        CalendarioComponent,
        CustomFilterPipe,
        UsuariosComponent

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
    CalendarModule.forRoot({
      provide:DateAdapter,
      useFactory:adapterFactory,
    }),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule
  ],
  exports:[
    MatTabsModule,
   MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    DataTablesModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule
  ],
  providers: [FlatpickrDefaults],
})
export class AdministradorModule { }
