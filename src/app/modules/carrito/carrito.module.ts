import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ResumenPedidoComponent } from './components/resumen-pedido/resumen-pedido.component';
import { PasosComponent } from './components/pasos/pasos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MedioDePagoComponent } from './components/medio-de-pago/medio-de-pago.component';
import { DatosDeEnvioComponent } from './components/datos-de-envio/datos-de-envio.component';
import { MatIconModule } from '@angular/material/icon';
import { FinalizarPedidoComponent } from './components/finalizar-pedido/finalizar-pedido.component';


@NgModule({
  declarations: [
    ListaProductosComponent,
    ResumenPedidoComponent,
    PasosComponent,
    CarritoComponent,
    MedioDePagoComponent,
    DatosDeEnvioComponent,
    FinalizarPedidoComponent,
    
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule
  ],
  exports:[
    PasosComponent,
    CarritoComponent,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule
  ]
})
export class CarritoModule { }

