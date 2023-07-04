import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CardsEstaticasComponent } from './components/cards-estaticas/cards-estaticas.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    CarrouselComponent,
    CardsEstaticasComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports:[
    HomeComponent
  ]
})
export class HomeModule { }
