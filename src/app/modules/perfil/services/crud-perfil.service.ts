import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class CrudPerfilService {


  constructor(private database:AngularFirestore, private fireAuth:AngularFireAuth) { 
   
  }
  private async obtenerUsuarioId(): Promise<string | null> {
    try {
      const user = await this.fireAuth.currentUser;

      if (user === null) {
        return null;
      } else {
        return user.uid;
      }
    } catch (error) {
      console.error('Error al obtener UID:', error);
      return null;
    }
  }

  async agregarDomicilio() {
    try {
      const usuarioId = await this.obtenerUsuarioId();

      if (!usuarioId) {
        throw new Error('Usuario no autenticado');
      }

      // Asigna el usuarioId como parte de la ruta de la colección
      const rutaColeccion = `usuarios/${usuarioId}/domicilio`;

      // Genera un ID único para la nueva publicación
      const id = this.database.createId();
      publicacion.idPublicacion = id;
      // 
     
      // Agrega la publicación a la colección del usuario
      const resultado = await this.database.collection(rutaColeccion).doc(id).set(publicacion);

  
      return resultado
    } catch (error) {
      throw error;
    }
}
