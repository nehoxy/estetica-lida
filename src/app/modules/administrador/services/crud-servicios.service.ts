import { Injectable } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CrudServiciosService {
  private serviciosCollection: AngularFirestoreCollection<Servicio>

  constructor(private database: AngularFirestore) { 
    this.serviciosCollection = database.collection('servicios')
  }

  crearServicio(servicio: Servicio){
    return new Promise(async(resolve, reject) =>{
      try{
        const id = this.database.createId();
        servicio.idServicio = id;

        const resultado = await this.serviciosCollection.doc(id).set(servicio);

        resolve(resultado);
      } catch (error){
        reject(error);
      }
    })
  }

  obtenerServicio(){
    // snapshoot -> captura los cambios
    // pipe -> tubería por dónde viajan esos nuevos datos
    // map -> recorre esos datos, los lee
    return this.serviciosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  // función para EDITAR PRODUCTO
  /*Envíamos el id del producto seleccionado y su nueva información*/
  modificarServicio(idServicio: string, nuevaData: Servicio){
    return this.database.collection('servicio').doc(idServicio).update(nuevaData)
  }

  // función para ELIMINAR PRODUCTO
  eliminarServicio(idServicio: string){
    return new Promise((resolve, reject) => {
      try{
        const resp = this.serviciosCollection.doc(idServicio).delete()
        resolve (resp)
      }
      catch(error){
        reject(error)
      }
    })
  }
}
