import { Component, OnInit,ViewChild} from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { CrudServiciosService } from '../../services/crud-servicios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-servicios-admin',
  templateUrl: './form-servicios-admin.component.html',
  styleUrls: ['./form-servicios-admin.component.css']
})
export class FormServiciosAdminComponent implements OnInit {

 
  coleccionServicios: Servicio [] = [];

  servicioSeleccionado!: Servicio; // ! -> toma valores vacíos

  modalVisibleServicio: boolean = false;  
// barra de busqueda
  busqueda:string = ''
  filtro:string = ''

  servicio = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    categoria: new FormControl('-1',Validators.required),
    profesional: new FormControl('-1',Validators.required)
  })

  

    constructor(private crudService:CrudServiciosService){}

    ngOnInit(): void {
       
        this.crudService.obtenerServicio().subscribe(servicio => {
            this.coleccionServicios = servicio;
        })
    }

    async agregarServicio(){
        if (this.servicio.valid){
          let nuevoServicio: Servicio = {
            idServicio: '', // único que guardamos vacío; lo creamos en el CRUD
            nombre: this.servicio.value.nombre!,
            imagen: this.servicio.value.imagen!,
            alt: this.servicio.value.alt!,
            descripcion: this.servicio.value.descripcion!,
            precio: this.servicio.value.precio!,
            categoria: this.servicio.value.categoria!,
            profesional:this.servicio.value.profesional!,
          };
    
          // ENVIAMOS NUESTRO NUEVO Servicio
          await this.crudService.crearServicio(nuevoServicio)
          .then(servicio => {
            Swal.fire({
                icon: 'success',
                iconColor: '#C8ECCB',
                buttonsStyling:false,
                customClass:{
                    confirmButton:'btn btn-sweetalert'
                },
                text: '¡Se ha agregado un nuevo servicio con exito!',
              })
            this.servicio.reset({categoria:'-1',profesional:'-1',})
          })
          .catch(error => {
            alert("Hubo un error al cargar el nuevo Servicio :( \n"+error);
          })
        }else{
            alert('error')
        }
      }
    
      // EDITAR Servicio -> se llama con el botón para el modal
      mostrarEditar(servicioSeleccionado: Servicio){
        this.servicioSeleccionado = servicioSeleccionado;
    
        // "seteamos" o enviamos los nuevos valores
        // el ID no se vuelve a enviar/ no se modifica
        this.servicio.setValue({
          nombre: servicioSeleccionado.nombre,
          imagen:  servicioSeleccionado.imagen,
          alt:  servicioSeleccionado.alt,
          descripcion:  servicioSeleccionado.descripcion,
          precio:  servicioSeleccionado.precio,
          categoria:  servicioSeleccionado.categoria,
          profesional: servicioSeleccionado.profesional
        })
      }
    
      // recibe los valores nuevos ingresados en el formulario
      editarServicio(){
        let datos: Servicio = {
          idServicio: this.servicioSeleccionado.idServicio,
          nombre: this.servicio.value.nombre!,
          imagen: this.servicio.value.imagen!,
          alt: this.servicio.value.alt!,
          descripcion: this.servicio.value.descripcion!,
          precio: this.servicio.value.precio!,
          categoria: this.servicio.value.categoria!,
          profesional:this.servicio.value.profesional!
        }
    
        this.crudService.modificarServicio(this.servicioSeleccionado.idServicio, datos)
        .then(servicio => {
            Swal.fire({
                icon: 'success',
                iconColor: '#C8ECCB',
                buttonsStyling:false,
                customClass:{
                    confirmButton:'btn btn-sweetalert'
                },
                text: '¡Se ha modificado el servicio con exito!',
              })
          this.servicio.reset({categoria:"-1",profesional:"-1"})
        })
        .catch(error => {
          alert("No se pudo modificar el Servicio :( \n"+error);
        })
      }

      resetForm(){
        this.servicio.reset({precio:0,categoria:"-1",profesional:"-1"})
      }
    
      // ELIMINAR Servicio
      mostrarBorrar(servicioSeleccionado: Servicio){ // botón para el modal
        this.modalVisibleServicio = true; // modal
        this.servicioSeleccionado = servicioSeleccionado;
    
          
          Swal.fire({
            title: 'Borrar servicio',
            text: "¿Estas seguro de querer borrar el servicio "+servicioSeleccionado.nombre+"?",
            icon: 'warning',
            buttonsStyling: false,
            customClass:{
                confirmButton:'btn btn2',
                cancelButton:'btn btn-danger'
            },
            showCancelButton: true,
            confirmButtonText: 'Borrar',
            cancelButtonText: 'No, cancelar',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {

                this.borrarServicio()
             
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              
            }
          })
      }
    
      borrarServicio(){ // función para eliminar Servicio
        this.crudService.eliminarServicio(this.servicioSeleccionado.idServicio)
        .then(respuesta =>{
            Swal.fire({
                icon: 'success',
                iconColor: '#C8ECCB',
                buttonsStyling:false,
                customClass:{
                    confirmButton:'btn btn-sweetalert'
                },
                text: '¡Se ha eliminado el servicio con exito!',
              })
        })
        .catch(error => {
          alert("No se ha podido eliminar el Servicio: \n"+error);
        })
      }
    
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
        }
    


}


