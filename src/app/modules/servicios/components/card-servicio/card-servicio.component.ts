import { Component,TemplateRef } from '@angular/core';
import { ModalSaberMasComponent } from '../modal-saber-mas/modal-saber-mas.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CardData } from 'src/app/models/card-data';
import { ModalData } from 'src/app/models/modal-data';

@Component({
  selector: 'app-card-servicio',
  templateUrl: './card-servicio.component.html',
  styleUrls: ['./card-servicio.component.css']
})
export class CardServicioComponent {
  modalData: ModalData = {
    titulo: '',
    descripcion: '',
  };
  modalRef?:BsModalRef;
  constructor( private modalService:BsModalService){

  }

  openModal(titulo,descripcion) {
    this.modalData.titulo = titulo
    this.modalData.descripcion = descripcion

  this.modalRef = this.modalService.show(ModalSaberMasComponent, {
    initialState: this.modalData,
  });
  
  
  }
 
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
