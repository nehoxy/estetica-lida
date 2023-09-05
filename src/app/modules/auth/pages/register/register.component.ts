import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  
  usuarios:Usuario = {
    uid:'',
    nombre:'',
    apellido: '',
    email:'',
    contrasena:''
  }
  uid = ''

  //creamos nueva coleccion para usuarios
  coleccionUsuarios : Usuario[] = [];

  constructor(public servicioAuth:AuthService, public servicioFirestore:FirestoreService, public _router:Router){

  }

//tomamos nuevos registros y mostramos los resultados
  async registrarse(){
    const credenciales = {
      nombre: this.usuarios.nombre,
      apellido:this.usuarios.apellido,
      email:this.usuarios.email,
      contrasena: this.usuarios.contrasena
    };

    const res = await this.servicioAuth.registrar(credenciales.nombre,credenciales.apellido,credenciales.email,credenciales.contrasena)
    .then(res=>{
      alert("Ha agregado un nuevo usuario con exito");
    })
    .catch(error=> alert("hubo un error al cargar el usuario \n"+error));
    
    const uid = await this.servicioAuth.getUid();

    this.usuarios.uid = uid;

    //guarda el nuevo usuario
    this.guardarUser();
    this._router.navigate(['home'])
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
