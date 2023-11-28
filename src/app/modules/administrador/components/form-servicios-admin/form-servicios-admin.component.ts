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
  p:number=1
   //coleccion de servicios
  coleccionServicios: Servicio [] = [];
  servicioSeleccionado!: Servicio; // ! -> toma valores vacíos

  modalVisibleServicio: boolean = false;  
// barra de busqueda
  busqueda:string = ''
  filtro:string = ''
//nuevo form de servicio con sus atributos
  servicio = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    categoria: new FormControl('-1',Validators.required),
    profesional: new FormControl('-1',Validators.required)
  })

    //servicio inyectado
    constructor(private crudService:CrudServiciosService){}

    ngOnInit(): void {
       //para mostrar todos los servicios al inicio
        this.crudService.obtenerServicio().subscribe(servicio => {
            this.coleccionServicios = servicio;
        })
    }
    //funcion asincronica para agregar un servicio con sus correspondientes atributos
    async agregarServicio(){
        if (this.servicio.valid){
          let nuevoServicio: Servicio = {
            idServicio: '', // único que guardamos vacío; lo creamos en el CRUD
            //'value' para tomar el valor dentro del atributo
            nombre: this.servicio.value.nombre!,
            imagen: this.servicio.value.imagen!,
            alt: this.servicio.value.alt!,
            descripcion: this.servicio.value.descripcion!,
            precio: this.servicio.value.precio!,
            categoria: this.servicio.value.categoria!,
            profesional:this.servicio.value.profesional!,
          };
    
          // enviamos el nuevo servicio
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
              //reseteamos el select
            this.servicio.reset({categoria:'-1',profesional:'-1',})
          })
          .catch(error => {
            alert("Hubo un error al cargar el nuevo Servicio :( \n"+error);
          })
        }else{
            alert('error')
        }
      }
    
      // Editar Servicio -> se llama con el botón para el modal
      mostrarEditar(servicioSeleccionado: Servicio){
        this.servicioSeleccionado = servicioSeleccionado;
    
        // "seteamos" o enviamos los nuevos valores
        // el ID no se vuelve a enviar ni se modifica
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
        //servicio actualizado con sus nuevos datos
        this.crudService.modificarServicio(this.servicioSeleccionado.idServicio, datos)
        //alert de servicio modificado exitosamente
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
          //resetea el select
          this.servicio.reset({categoria:"-1",profesional:"-1"})
        })
        .catch(error => {
          alert("No se pudo modificar el Servicio :( \n"+error);
        })
      }
      //funcion para resetear el form (que sus campos queden vacios luego de haber editado o agregado un servicio)
      resetForm(){
        this.servicio.reset({precio:0,categoria:"-1",profesional:"-1"})
      }
    
      // funcion para mostrar el eliminar el servicio
      mostrarBorrar(servicioSeleccionado: Servicio){ // botón para el modal
        this.modalVisibleServicio = true; // modal
        this.servicioSeleccionado = servicioSeleccionado;
        //alert de confirmacion para eliminar el servicio
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
          })
          //devuelve un resultado si el administrador confirma la eliminacion del servicio
          .then((result) => {
            if (result.isConfirmed) {

                this.borrarServicio()
             
            } else if (
              //se cancela la eliminacion
              result.dismiss === Swal.DismissReason.cancel
            ) {
              
            }
          })
      }
    
      borrarServicio(){ // función para eliminar Servicio
        //toma el id del servicio
        this.crudService.eliminarServicio(this.servicioSeleccionado.idServicio)
        //alert de servicio eliminado exitosamente
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


