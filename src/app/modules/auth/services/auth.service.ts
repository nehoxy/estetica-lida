import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth:AngularFireAuth) { }

  registrar(nombre:string,apellido:string,email:string,contrasena:string){
    return this.auth.createUserWithEmailAndPassword(email,contrasena)
  }

  async getUid(){
    const user = await this.auth.currentUser

    if(user == null){
      return null;
    }else{
      return user.uid
    }
  }
}