import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth:AngularFireAuth, public firestore:AngularFirestore) { }

  iniciarSesion(email:string, contrasena:string){
    return this.auth.signInWithEmailAndPassword(email,contrasena)
    }

  registrar(nombre:string,apellido:string,email:string,contrasena:string){
    return this.auth.createUserWithEmailAndPassword(email,contrasena)
  }

  async getUid(){
    const user = await this.auth.currentUser

    if(user == null){
      return null;
    }else{
      console.log('User UID:', user.uid);
      return user.uid
    }
  }

  getUserData(uid: string) {
    return this.firestore.collection('usuarios').doc(uid).valueChanges();
  }

  cerrarSesion(){
    // devuelve una promesa vacía
    return this.auth.signOut();
  }
}
