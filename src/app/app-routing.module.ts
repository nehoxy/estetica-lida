import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./modules/auth/auth.module').then(m => m.AuthModule)

  },
  {
    path:'home',
    loadChildren:()=>import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'productos',
    loadChildren:()=>import('./modules/productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path:'servicios',
    loadChildren:()=>import('./modules/servicios/servicios.module').then(m => m.ServiciosModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
