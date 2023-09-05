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
  {
    path:'perfil',
    loadChildren:()=>import('./modules/perfil/perfil.module').then(m => m.PerfilModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./modules/administrador/administrador.module').then(m => m.AdministradorModule)
  },
  {
    path:'carrito',
    loadChildren:()=>import('./modules/carrito/carrito.module').then(m => m.CarritoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
