import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudUsuariosService {

  constructor(private database:AngularFirestore) { }

  modificarUsuario(idUsuario: string, nuevaData:any){
    return this.database.collection('usuarios').doc(idUsuario).update(nuevaData)
  }
}
