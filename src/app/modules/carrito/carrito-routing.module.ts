import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PasosComponent } from './components/pasos/pasos.component';

const routes: Routes = [
  {path:'',component:CarritoComponent},
  {path:'pasos',component:PasosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
