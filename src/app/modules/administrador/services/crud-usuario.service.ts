import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario';
@Injectable({
  providedIn: 'root'
})
export class CrudUsuarioService {
  private usuariosColeccion: AngularFirestoreCollection<Usuario>
  constructor(private database: AngularFirestore) { 
    this.usuariosColeccion = database.collection('usuarios')
  }


obtenerProducto(){
 return this.usuariosColeccion.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
 // snapshoot -> captura los cambios
 // pipe -> tubería por dónde viajan esos nuevos datos
 // map -> recorre esos datos, los lee
}
modificarUsuario(idUsuario: string, nuevaData:Usuario){
 return this.database.collection('usuario').doc(idUsuario).update(nuevaData)
 }
 eliminarUsuario(idUsuario:string){
   return new Promise((resolve,reject)=>{
     try{
       const resp = this.usuariosColeccion.doc(idUsuario).delete()
       resolve(resp) //resolve da respuesta a las cosas que salen bien
     }
     catch(error){
       reject(error) //reject da respuesta a las cosas si no salieron bien
     }
   })
 }
}
