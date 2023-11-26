import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CrudUsuariosService } from '../../services/crud-usuarios.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent {
  userData: any = {};
  usuarioSeleccionado!:Usuario

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private crudService:CrudUsuariosService) {}


  getUserData() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        // Usuario está autenticado
        const userId = user.uid;
  
        // Obtener datos del usuario desde Firestore
        this.firestore.collection('usuarios').doc(userId).valueChanges().subscribe(userData => {
          // userData contiene los datos del usuario
        });
      }
    });
  }

 

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const userId = user.uid;

        this.firestore.collection('usuarios').doc(userId).valueChanges().subscribe(userData => {
          this.userData = userData;
        });
      }
    });
  }
}

