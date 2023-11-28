import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2/public-api';
import { FormControl,FormBuilder,Validators } from '@angular/forms';
import { IsLoggedInService } from 'src/app/shared/services/is-logged-in.service';
import Swal from 'sweetalert2';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  hidePass = true;
  isLogged:boolean;
  formLogin = this.fb.group({
    email: new FormControl ('',[Validators.required, Validators.email]),
    contrasena: new FormControl('',[Validators.required, Validators.minLength(8)])
  })

  usuarios: Usuario = {
    uid:'',
    nombre:'',
    apellido:'',
    email:'',
    rol:'',
    contrasena:'' }

    constructor(public servicioAuth:AuthService, public firestore:FirestoreService, public router:Router, public fb:FormBuilder, public logged:IsLoggedInService){}

  async iniciarSesion(){
    const credenciales = {
      email:this.usuarios.email,
      contrasena:this.usuarios.contrasena
    }
    const res = await this.servicioAuth.iniciarSesion(credenciales.email,credenciales.contrasena)
    .then( res =>{
  
      Swal.fire({
        icon: 'success',
        iconColor: '#C8ECCB',
        confirmButtonColor: '#BB8588',
        title: 'Iniciaste sesion',
        text: 'Bienvenido/a '+credenciales.email+'!',
      })
      this.router.navigate(['home'])
      this.checkUserRole()
      this.logged.setLoggedStatus(true);
      console.log(this.isLogged)
    }).catch(error =>{
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

  async checkUserRole() {
    try {
      const uid = await this.servicioAuth.getUid();

      if (uid) {
        const userData = await this.servicioAuth.getUserData(uid).pipe(take(1)).toPromise();

        if (userData && userData['rol']) {
          const userRole = userData['rol'];
          console.log('User Role:', userRole);
          this.logged.setAdminStatus(true)
          // Ahora puedes realizar acciones basadas en el rol del usuario
          // Por ejemplo, redirigir a diferentes rutas o mostrar componentes específicos
        } else {
          console.log('No se encontró información del usuario o el rol.');
        }
      } else {
        console.log('No se pudo obtener el UID del usuario.');
      }
    } catch (error) {
      console.error('Error al obtener información del usuario:', error);
    }
  }
  
}
