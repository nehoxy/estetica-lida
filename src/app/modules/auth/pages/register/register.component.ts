import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/app/models/usuario';

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
}
