import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2/public-api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  usuarios: Usuario = {
    uid:'',
    nombre:'',
    apellido:'',
    email:'',
    rol:'',
    contrasena:'' }

    constructor(public servicioAuth:AuthService, public firestore:FirestoreService, public router:Router){}

  async iniciarSesion(){
    const credenciales = {
      email:this.usuarios.email,
      contrasena:this.usuarios.contrasena
    }
    const res = await this.servicioAuth.iniciarSesion(credenciales.email,credenciales.contrasena).then( res =>{
  
      Swal.fire({
        icon: 'success',
        iconColor: '#BB8588',
        confirmButtonColor: '#BB8588',
        title: 'Iniciaste sesion',
        text: 'Bienvenido '+credenciales.email+'!',
      })
    }).catch(error =>{
      alert('Hubo un error al iniciar sesion'+error)
    })
  }

    }
