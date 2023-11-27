import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent {
  userData: any = {};
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}


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

