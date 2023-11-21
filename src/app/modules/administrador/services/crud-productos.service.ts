import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudProductosService {
  private productosColeccion: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    
    this.productosColeccion = database.collection('productos')
   }

   //FUNCION CREAR PRODUCTOS
   crearProducto(producto:Producto) {
    return new Promise(async(resolve,reject) =>{
      try{
        const id = this.database.createId();
        producto.idProducto = id;
        
        const resultado = await this.productosColeccion.doc(id).set(producto);
        resolve(resultado);
      } catch(error){
        reject(error)
      }
    })
   }

   obtenerProducto(){
    return this.productosColeccion.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
    // snapshoot -> captura los cambios
    // pipe -> tubería por dónde viajan esos nuevos datos
    // map -> recorre esos datos, los lee
   }
   modificarProducto(idProducto: string, nuevaData:Producto){
    return this.database.collection('productos').doc(idProducto).update(nuevaData)
    }
    eliminarProducto(idProducto:string){
      return new Promise((resolve,reject)=>{
        try{
          const resp = this.productosColeccion.doc(idProducto).delete()
          resolve(resp) //resolve da respuesta a las cosas que salen bien
        }
        catch(error){
          reject(error) //reject da respuesta a las cosas si no salieron bien
        }
      })
    }
}
