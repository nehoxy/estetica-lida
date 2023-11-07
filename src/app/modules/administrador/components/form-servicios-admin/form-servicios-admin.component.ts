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

  servicio = new FormGroup({
    nombre: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    categoria: new FormControl('-1',Validators.required),
    profesional: new FormControl('-1',Validators.required)
  })

    idioma = {
    "processing": "Procesando...",
    "lengthMenu": "Mostrar _MENU_ registros",
    "zeroRecords": "No se encontraron resultados",
    "emptyTable": "Ningún dato disponible en esta tabla",
    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
    "search": "Buscar:",
    "loadingRecords": "Cargando...",
    "paginate": {
        "first": "Primero",
        "last": "Último",
        "next": "Siguiente",
        "previous": "Anterior"
    },
    "aria": {
        "sortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sortDescending": ": Activar para ordenar la columna de manera descendente"
    },
    "buttons": {
        "copy": "Copiar",
        "colvis": "Visibilidad",
        "collection": "Colección",
        "colvisRestore": "Restaurar visibilidad",
        "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br \/> <br \/> Para cancelar, haga clic en este mensaje o presione escape.",
        "copySuccess": {
            "1": "Copiada 1 fila al portapapeles",
            "_": "Copiadas %ds fila al portapapeles"
        },
        "copyTitle": "Copiar al portapapeles",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "-1": "Mostrar todas las filas",
            "_": "Mostrar %d filas"
        },
        "pdf": "PDF",
        "print": "Imprimir",
        "renameState": "Cambiar nombre",
        "updateState": "Actualizar",
        "createState": "Crear Estado",
        "removeAllStates": "Remover Estados",
        "removeState": "Remover",
        "savedStates": "Estados Guardados",
        "stateRestore": "Estado %d"
    },
    "autoFill": {
        "cancel": "Cancelar",
        "fill": "Rellene todas las celdas con <i>%d<\/i>",
        "fillHorizontal": "Rellenar celdas horizontalmente",
        "fillVertical": "Rellenar celdas verticalmente"
    },
    "decimal": ",",
    "searchBuilder": {
        "add": "Añadir condición",
        "button": {
            "0": "Constructor de búsqueda",
            "_": "Constructor de búsqueda (%d)"
        },
        "clearAll": "Borrar todo",
        "condition": "Condición",
        "conditions": {
            "date": {
                "before": "Antes",
                "between": "Entre",
                "empty": "Vacío",
                "equals": "Igual a",
                "notBetween": "No entre",
                "not": "Diferente de",
                "after": "Después",
                "notEmpty": "No Vacío"
            },
            "number": {
                "between": "Entre",
                "equals": "Igual a",
                "gt": "Mayor a",
                "gte": "Mayor o igual a",
                "lt": "Menor que",
                "lte": "Menor o igual que",
                "notBetween": "No entre",
                "notEmpty": "No vacío",
                "not": "Diferente de",
                "empty": "Vacío"
            },
            "string": {
                "contains": "Contiene",
                "empty": "Vacío",
                "endsWith": "Termina en",
                "equals": "Igual a",
                "startsWith": "Empieza con",
                "not": "Diferente de",
                "notContains": "No Contiene",
                "notStartsWith": "No empieza con",
                "notEndsWith": "No termina con",
                "notEmpty": "No Vacío"
            },
            "array": {
                "not": "Diferente de",
                "equals": "Igual",
                "empty": "Vacío",
                "contains": "Contiene",
                "notEmpty": "No Vacío",
                "without": "Sin"
            }
        },
        "data": "Data",
        "deleteTitle": "Eliminar regla de filtrado",
        "leftTitle": "Criterios anulados",
        "logicAnd": "Y",
        "logicOr": "O",
        "rightTitle": "Criterios de sangría",
        "title": {
            "0": "Constructor de búsqueda",
            "_": "Constructor de búsqueda (%d)"
        },
        "value": "Valor"
    },
    "searchPanes": {
        "clearMessage": "Borrar todo",
        "collapse": {
            "0": "Paneles de búsqueda",
            "_": "Paneles de búsqueda (%d)"
        },
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Sin paneles de búsqueda",
        "loadMessage": "Cargando paneles de búsqueda",
        "title": "Filtros Activos - %d",
        "showMessage": "Mostrar Todo",
        "collapseMessage": "Colapsar Todo"
    },
    "select": {
        "cells": {
            "1": "1 celda seleccionada",
            "_": "%d celdas seleccionadas"
        },
        "columns": {
            "1": "1 columna seleccionada",
            "_": "%d columnas seleccionadas"
        },
        "rows": {
            "1": "1 fila seleccionada",
            "_": "%d filas seleccionadas"
        }
    },
    "thousands": ".",
    "datetime": {
        "previous": "Anterior",
        "hours": "Horas",
        "minutes": "Minutos",
        "seconds": "Segundos",
        "unknown": "-",
        "amPm": [
            "AM",
            "PM"
        ],
        "months": {
            "0": "Enero",
            "1": "Febrero",
            "10": "Noviembre",
            "11": "Diciembre",
            "2": "Marzo",
            "3": "Abril",
            "4": "Mayo",
            "5": "Junio",
            "6": "Julio",
            "7": "Agosto",
            "8": "Septiembre",
            "9": "Octubre"
        },
        "weekdays": {
            "0": "Dom",
            "1": "Lun",
            "2": "Mar",
            "4": "Jue",
            "5": "Vie",
            "3": "Mié",
            "6": "Sáb"
        },
        "next": "Próximo"
    },
    "editor": {
        "close": "Cerrar",
        "create": {
            "button": "Nuevo",
            "title": "Crear Nuevo Registro",
            "submit": "Crear"
        },
        "edit": {
            "button": "Editar",
            "title": "Editar Registro",
            "submit": "Actualizar"
        },
        "remove": {
            "button": "Eliminar",
            "title": "Eliminar Registro",
            "submit": "Eliminar",
            "confirm": {
                "_": "¿Está seguro de que desea eliminar %d filas?",
                "1": "¿Está seguro de que desea eliminar 1 fila?"
            }
        },
        "error": {
            "system": "Ha ocurrido un error en el sistema (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Más información&lt;\\\/a&gt;).<\/a>"
        },
        "multi": {
            "title": "Múltiples Valores",
            "restore": "Deshacer Cambios",
            "noMulti": "Este registro puede ser editado individualmente, pero no como parte de un grupo.",
            "info": "Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, haga clic o pulse aquí, de lo contrario conservarán sus valores individuales."
        }
    },
    "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
    "stateRestore": {
        "creationModal": {
            "button": "Crear",
            "name": "Nombre:",
            "order": "Clasificación",
            "paging": "Paginación",
            "select": "Seleccionar",
            "columns": {
                "search": "Búsqueda de Columna",
                "visible": "Visibilidad de Columna"
            },
            "title": "Crear Nuevo Estado",
            "toggleLabel": "Incluir:",
            "scroller": "Posición de desplazamiento",
            "search": "Búsqueda",
            "searchBuilder": "Búsqueda avanzada"
        },
        "removeJoiner": "y",
        "removeSubmit": "Eliminar",
        "renameButton": "Cambiar Nombre",
        "duplicateError": "Ya existe un Estado con este nombre.",
        "emptyStates": "No hay Estados guardados",
        "removeTitle": "Remover Estado",
        "renameTitle": "Cambiar Nombre Estado",
        "emptyError": "El nombre no puede estar vacío.",
        "removeConfirm": "¿Seguro que quiere eliminar %s?",
        "removeError": "Error al eliminar el Estado",
        "renameLabel": "Nuevo nombre para %s:"
    },
    "infoThousands": "."
    }  

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


