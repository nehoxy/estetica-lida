import { Component } from '@angular/core';
import { CrudUsuarioService } from '../../services/crud-usuario.service';
import { Usuario } from 'src/app/models/usuario';
import Swal from "sweetalert2";
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  coleccionUsuarios: Usuario [] = [];
  usuarioSeleccionado!:Usuario; // ! -> toma valores vacios
  modalVisibleUsuario:boolean = false;

  busqueda:string = ''
  filtro:string = ''
  constructor (public servicioCrudUsuario: CrudUsuarioService){}
  ngOnInit(): void {

    this.servicioCrudUsuario.obtenerProducto().subscribe(usuario => {
        this.coleccionUsuarios = usuario
    })
}  
  mostrarBorrar(usuarioSeleccionado:Usuario) { //boton eliminar
    this.modalVisibleUsuario = true;
    this.usuarioSeleccionado = usuarioSeleccionado;

    //modal o alert para eliminar producto
    Swal.fire({
        title: 'Borrar producto',
        text: "¿Estas seguro de querer borrar el producto "+usuarioSeleccionado.nombre+"?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

            this.borrarProducto()
         
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          
        }
      })
    }

  borrarProducto(){ //funcion para eliminar producto
    this.servicioCrudUsuario.eliminarUsuario(this.usuarioSeleccionado.uid)
    .then(respuesta => {
        Swal.fire({
            icon: 'success',
            iconColor: '#C8ECCB',
            confirmButtonColor: '#BB8588',
            text: '¡Se ha eliminado el producto con exito!',
          })
    })
    .catch(error => {
      alert("No se ha podido eliminar el producto: \n"+error);
    })
  }
  
}
