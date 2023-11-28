import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Domicilio } from 'src/app/models/domicilio';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CrudPerfilService {

  domicilio!:any
  userId!:string
  
  constructor(private database:AngularFirestore, private fireAuth:AngularFireAuth) { 
    this.domicilio = database.collection('usuarios/`${userId}`/domicilio')
  }
  private async obtenerUsuarioId(): Promise<string | null> {
    try {
      const user = await this.fireAuth.currentUser;

      if (user === null) {
        return null;
      } else {
        this.userId = user.uid
        return user.uid;
      }
    } catch (error) {
      console.error('Error al obtener UID:', error);
      return null;
    }
  }

  getDomicilio(){
  }

  async agregarDomicilio(domicilio:Domicilio) {
    try {
      const usuarioId = await this.obtenerUsuarioId();

      if (!usuarioId) {
        throw new Error('Usuario no autenticado');
      }

      // Asigna el usuarioId como parte de la ruta de la colección
      const rutaColeccion = `usuarios/${usuarioId}/domicilio`;

      // Genera un ID único para la nueva publicación
      const id = this.database.createId();
      domicilio.idDomicilio = id;
      // 
     
      // Agrega la publicación a la colección del usuario
      const resultado = await this.database.collection(rutaColeccion).doc('casa').set(domicilio);

  
      return resultado
    } catch (error) {
      throw error;
    }
  }
}
