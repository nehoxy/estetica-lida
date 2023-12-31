import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudProductosService {
  // declaramos productosColeccion como una coleccion de firestore de tipo producto
  private productosColeccion: AngularFirestoreCollection<Producto>


  constructor(private database: AngularFirestore) {

    //definimos la ruta de la coleccion productos
    this.productosColeccion = database.collection('productos')
  }

  //METODO CREAR PRODUCTOS
  crearProducto(producto: Producto) {
    return new Promise(async (resolve, reject) => {
      try {
        // creamos el id unico 
        const id = this.database.createId();
        producto.idProducto = id;

        const resultado = await this.productosColeccion.doc(id).set(producto);
        resolve(resultado);
      } catch (error) {
        reject(error)
      }
    })
  }

  obtenerProducto() {
    return this.productosColeccion.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
    // snapshoot -> captura los cambios
    // pipe -> tubería por dónde viajan esos nuevos datos
    // map -> recorre esos datos, los lee
  }

  // metodo para obtener los productos de menor precio a mayor
  obtenerProductoPrecioMenor() {
    return this.productosColeccion.snapshotChanges().pipe(
      map(action => action.map(a => a.payload.doc.data())),
      map(productos => productos.sort((a, b) => a.precio - b.precio))
    );
  }
  // metodo para obtener los productos de mayor precio a menor
  obtenerProductoPrecioMayor() {
    return this.productosColeccion.snapshotChanges().pipe(
      map(action => action.map(a => a.payload.doc.data())),
      map(productos => productos.sort((a, b) => b.precio - a.precio))
    );
  }

  modificarProducto(idProducto: string, nuevaData: Producto) {
    return this.database.collection('productos').doc(idProducto).update(nuevaData)
  }

  eliminarProducto(idProducto: string) {
    return new Promise((resolve, reject) => {
      try {
        const resp = this.productosColeccion.doc(idProducto).delete()
        resolve(resp) //resolve da respuesta a las cosas que salen bien
      }
      catch (error) {
        reject(error) //reject da respuesta a las cosas si no salieron bien
      }
    })
  }
}
