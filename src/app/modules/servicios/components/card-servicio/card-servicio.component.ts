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

  // creamos las distintas colecciones para separar los servicios
  listaServicios:Servicio[] = []
  manicuria:Servicio[] = []
  pedicuria:Servicio[] = []
  belleza:Servicio[] = []
  estetica:Servicio[] = []

  modalRef?:BsModalRef;
  busqueda:string = ''
  filtro:string = 'todos'


  constructor( private modalService:BsModalService, private crudService:CrudServiciosService){

  }
  /*
  este metodo recibe los parametros de la card titulo y descripcion para despues mostrarlo en un modal
  */
  openModal(titulo,descripcion) {
    this.modalData.titulo = titulo
    this.modalData.descripcion = descripcion

  this.modalRef = this.modalService.show(ModalSaberMasComponent, {
    initialState: this.modalData,class: 'modal-sm',backdrop:true
  },);
  
  }
 

  ngOnInit():void{
    this.mostrarServicios()
}
  
  // este metodo muestra TODOS los servicios
  mostrarServicios(){
    this.crudService.obtenerServicio().subscribe(servicio => {
      this.listaServicios = servicio;
      this.mostrarBelleza()
      this.mostrarEstetica()
      this.mostrarManicuria()
      this.mostrarPedicuria()
  })
  }

  // filtramos los servicios de manicuria y los agregamos a la correspondiente coleccion
  mostrarManicuria(){
    this.listaServicios.forEach(servicio =>{
      if(servicio.categoria === "manicuria"){
        this.manicuria.push(servicio)
      }
    })
  }

  // filtramos los servicios de pedicuria y los agregamos a la correspondiente coleccion
  mostrarPedicuria(){
    this.listaServicios.forEach(servicio =>{
      if(servicio.categoria === "pedicuria"){
        this.pedicuria.push(servicio)
      }
    })
  }

  // filtramos los servicios de belleza facial y los agregamos a la correspondiente coleccion
  mostrarBelleza(){
    this.listaServicios.forEach(servicio =>{
      if(servicio.categoria === "bellezafacial"){
        this.belleza.push(servicio)
      }
    })
  }

  // filtramos los servicios de belleza corporal y los agregamos a la correspondiente coleccion
  mostrarEstetica(){
    this.listaServicios.forEach(servicio =>{
      if(servicio.categoria === "bellezacorporal"){
        this.estetica.push(servicio)
      }
    })
  }
}
