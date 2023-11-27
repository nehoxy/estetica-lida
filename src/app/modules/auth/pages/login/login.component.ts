import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2/public-api';
import { FormControl,FormBuilder,Validators } from '@angular/forms';
import { IsLoggedInService } from 'src/app/shared/services/is-logged-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  hidePass = true;
  //verifica si el usuario esta logeado o no
  isLogged:boolean;

  //crea un nuevo form: email y contraseña
  formLogin = this.fb.group({
    email: new FormControl ('',[Validators.required, Validators.email]),
    contrasena: new FormControl('',[Validators.required, Validators.minLength(8)])
  })

  //llama a la interfaz con sus respectivos atributos
  usuarios: Usuario = {
    uid:'',
    nombre:'',
    apellido:'',
    email:'',
    rol:'',
    contrasena:'' }

    //inyectar los servicios y clases
    constructor(public servicioAuth:AuthService, public firestore:FirestoreService, public router:Router, public fb:FormBuilder, public logged:IsLoggedInService){}

  //funcion asincronica para iniciar sesion
  async iniciarSesion(){
    //crea la credencial que contiene el email y contraseña 
    const credenciales = {
      email:this.usuarios.email,
      contrasena:this.usuarios.contrasena
    }
    //respuesta: llama al servicio auth para iniciar sesion con las credenciales 
    const res = await this.servicioAuth.iniciarSesion(credenciales.email,credenciales.contrasena)
    .then( res =>{
      //alert de incio exitoso
      Swal.fire({
        icon: 'success',
        iconColor: '#C8ECCB',
        confirmButtonColor: '#BB8588',
        title: 'Iniciaste sesion',
        text: 'Bienvenido/a '+credenciales.email+'!',
      })
      //una vez iniciado sesion te redirecciona al home
      this.router.navigate(['home'])
      //ahora el estado de islogged es true
      this.logged.setLoggedStatus(true);
      console.log(this.isLogged)
    }).catch(error =>{
      //alert de error
      Swal.fire({
        icon: 'error',
        confirmButtonColor: '#BB8588',
        showConfirmButton:false,
        showCloseButton: true,
        title: 'Error',
        text: error,
        toast:true,
        position:'bottom'
      })
    })
  }

    }
