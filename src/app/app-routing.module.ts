import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { zip } from 'rxjs';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./modules/auth/auth.module').then(m => m.AuthModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
