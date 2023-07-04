import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { CardsEstaticasComponent } from './components/cards-estaticas/cards-estaticas.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarrouselComponent,
    CardsEstaticasComponent
  ],
  imports: [
    CommonModule,
   
  ],
  exports: [
    CardsEstaticasComponent
  ]
})
export class HomeModule { }
