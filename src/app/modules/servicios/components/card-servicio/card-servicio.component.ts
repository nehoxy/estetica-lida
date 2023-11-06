import { Component,TemplateRef } from '@angular/core';
import { ModalSaberMasComponent } from '../modal-saber-mas/modal-saber-mas.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalData } from 'src/app/models/modal-data';
import { CrudServiciosService } from 'src/app/modules/administrador/services/crud-servicios.service';
import { Servicio } from 'src/app/models/servicio';

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
  listaServicios:Servicio[] = []
  modalRef?:BsModalRef;
  busqueda:string = ''
  constructor( private modalService:BsModalService, private crudService:CrudServiciosService){

  }

  openModal(titulo,descripcion) {
    this.modalData.titulo = titulo
    this.modalData.descripcion = descripcion

  this.modalRef = this.modalService.show(ModalSaberMasComponent, {
    initialState: this.modalData,class: 'modal-sm'
  },);
  
  }
 

  ngOnInit():void{
    this.crudService.obtenerServicio().subscribe(servicio => {
      this.listaServicios = servicio;
  })}
 
}
