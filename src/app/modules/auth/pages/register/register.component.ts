import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Validators,FormBuilder,FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  hidePass = true;
  error:boolean = false;
  errorMensaje:string = ''
  repetirContrasena:any = ''
  
  formRegistro = this.fb.group({
    nombre: new FormControl ('',[Validators.required, Validators.minLength(4)]),
    apellido: new FormControl('',[Validators.required, Validators.minLength(6)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    contrasena: new FormControl('',[Validators.required, Validators.minLength(8)]),
    repetirContrasena: new FormControl('',[Validators.required, Validators.minLength(8)])
  })
  usuarios:Usuario = {
    uid:'',
    nombre:'',
    apellido: '',
    email:'',
    rol:'',
    contrasena:'',
  }
  uid = ''

  //creamos nueva coleccion para usuarios
  coleccionUsuarios : Usuario[] = [];

  constructor(public servicioAuth:AuthService, public servicioFirestore:FirestoreService, public _router:Router, public fb:FormBuilder){

  }

//tomamos nuevos registros y mostramos los resultados
  async registrarse(){
    
    const {} = this.formRegistro.value
    if(this.usuarios.contrasena !== this.repetirContrasena){
      this.error = true,
      this.errorMensaje = 'Las contraseñas no coinciden'
      Swal.fire({
        icon: 'error',
        confirmButtonColor: '#BB8588',
        showConfirmButton:false,
        showCloseButton: true,
        title: 'Error',
        text: this.errorMensaje,
        toast:true,
        position:'bottom'
      })
    }else {
      if(this.usuarios.email && this.usuarios.contrasena){
        try{
          const credenciales = {
            nombre: this.usuarios.nombre,
            apellido:this.usuarios.apellido,
            email:this.usuarios.email,
            contrasena: this.usuarios.contrasena
          };
      
          const res = await this.servicioAuth.registrar(credenciales.nombre,credenciales.apellido,credenciales.email,credenciales.contrasena)
          .then(res=>{
            Swal.fire({
              icon: 'success',
              iconColor: '#BB8588',
              confirmButtonColor: '#BB8588',
              title: 'Se ha registrado correctamente',
              text: 'Bienvenido '+credenciales.email+'!',
            })
          })
          .catch(error=> alert("hubo un error al cargar el usuario \n"+error));
          
          const uid = await this.servicioAuth.getUid();
      
          this.usuarios.uid = uid;
      
          //guarda el nuevo usuario
          this.guardarUser();
          this._router.navigate(['home'])
        }catch(err){
          console.log(err)
        }
        }
    }
    
  }

  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid, this.usuarios.nombre, this.usuarios.apellido, this.usuarios.email, this.usuarios.contrasena).then(res=>{
      console.log(this.usuarios)
    })
    .catch(error => {
      console.log('Error =>',error)
    })
  }

  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid)
    
  }
}
