import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap'


@Component({
  selector: 'app-card-servicio',
  templateUrl: './card-servicio.component.html',
  styleUrls: ['./card-servicio.component.css']
})
export class CardServicioComponent {

 listaServicios = [
  {
    id:1, 
    titulo:"Manicuria Rusa",
    precio:2000,
    imagen:"../../../../../assets/img-card-servicio/manicuria-rusa.jpg",
    descripcion:"La manicura rusa se realiza con torno y consigue una limpieza profunda de la uña quitando totalmente la cutícula. Utilizando diferentes fresas o brocas, se retira la cutícula suavemente y se aplica el esmalte lo más cerca posible de ésta."
  },
  {
    id:2, 
    titulo:"Esmaltado Semi",
    precio:3000,
    imagen:"../../../../../assets/img-card-servicio/esmaltado-semi-permanente.jpg",
    descripcion:"La manicura rusa se realiza con torno y consigue una limpieza profunda de la uña quitando totalmente la cutícula. Utilizando diferentes fresas o brocas, se retira la cutícula suavemente y se aplica el esmalte lo más cerca posible de ésta."
  }
 ]
}
