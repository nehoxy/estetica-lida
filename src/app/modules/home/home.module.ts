import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardsEstaticasComponent } from './components/cards-estaticas/cards-estaticas.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoHomeComponent } from './components/info-home/info-home.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardsEstaticasComponent,
    CarrouselComponent,
    InfoHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
