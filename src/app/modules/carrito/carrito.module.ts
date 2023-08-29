import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ResumenPedidoComponent } from './components/resumen-pedido/resumen-pedido.component';
import { PasosComponent } from './components/pasos/pasos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';


@NgModule({
  declarations: [
    ListaProductosComponent,
    ResumenPedidoComponent,
    PasosComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule
  ]
})
export class CarritoModule { }
