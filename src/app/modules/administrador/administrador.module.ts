import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PanelComponent } from './components/panel/panel.component';



@NgModule({
  declarations: [

  
    AdministradorComponent,
        PanelComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MatTabsModule,
   
  ]
})
export class AdministradorModule { }
