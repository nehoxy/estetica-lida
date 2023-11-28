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
  
  //crea un nuevo form: nombre, apellido, email, contraseña y repetir contraseña
  formRegistro = this.fb.group({
    nombre: new FormControl ('',[Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    contrasena: new FormControl('',[Validators.required, Validators.minLength(8)]),
    repetirContrasena: new FormControl('',[Validators.required, Validators.minLength(8)])
  })

  //llama a la interfaz con sus respectivos atributos
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

  //inyectamos los servicios y clases
  constructor(public servicioAuth:AuthService, public servicioFirestore:FirestoreService, public _router:Router, public fb:FormBuilder){

  }

//funcion asincronica para tomar nuevos registros y mostrar los resultados
  async registrarse(){
    
    this.repetirContrasena = this.formRegistro.value.repetirContrasena
    //if para verificar que las contraseñas sean iguales
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
      //si el registro es valido te crea tu credencial
      if(this.formRegistro.valid){
        try{
          const credenciales = {
            nombre: this.usuarios.nombre,
            apellido:this.usuarios.apellido,
            email:this.usuarios.email,
            contrasena: this.usuarios.contrasena
          };
      
          //respuesta: llama al servicio auth para registrar al usuario
          const res = await this.servicioAuth.registrar(credenciales.nombre,credenciales.apellido,credenciales.email,credenciales.contrasena)
          .then(res=>{
            Swal.fire({
              icon: 'success',
              iconColor: '#C8ECCB',
              confirmButtonColor: '#BB8588',
              title: 'Se ha registrado correctamente, ahora debe iniciar sesión',
              text: 'Bienvenido/a '+credenciales.email+'!',
            })
            //una vez registrado te lleva al inicio
            this._router.navigate(['auth/login'])
          })
          //error
          .catch(error=> {
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
          });
          //guarda el id
          const uid = await this.servicioAuth.getUid();
          //toma el id del usuario registrado
          this.usuarios.uid = uid;
      
          //guarda el nuevo usuario
          this.guardarUser();
          
        }catch(err){
          console.log(err)
        }
        }else{
          Swal.fire({
            icon: 'error',
            confirmButtonColor: '#BB8588',
            showConfirmButton:false,
            showCloseButton: true,
            title: 'Error',
            text: 'Hay datos invalidos en el formulario',
            toast:true,
            position:'bottom'
          })
        }
    }
    
  }

  //funcion asincronica para guardar el usuario
  async guardarUser(){
    //llama al servicio firestore tomando las credenciales
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid, this.usuarios.nombre, this.usuarios.apellido, this.usuarios.email, this.usuarios.contrasena)
    //respuesta: usuarios
    .then(res=>{
      console.log(this.usuarios)
    })
    .catch(error => {
      console.log('Error =>',error)
    })
  }

  //guarda el id
  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid)
    
  }
}
