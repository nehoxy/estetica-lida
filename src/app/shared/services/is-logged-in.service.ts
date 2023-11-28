import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map,switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class IsLoggedInService {
  //crea el sujeto valor booleano para despues subscribirse
  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isAdminSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  
  constructor(private auth:AuthService, private router:Router, private firestore:AngularFirestore, private authF:AngularFireAuth) { 

    const storedIsLogged = localStorage.getItem('isLogged');
    //si el usuario esta logeado poner true en el local storage 
    if (storedIsLogged) {
      this.isLoggedSubject.next(storedIsLogged === 'true');
    }

    const storedIsAdmin = localStorage.getItem('isAdmin');
    if (storedIsAdmin) {
      this.isAdminSubject.next(storedIsAdmin === 'true');
    }
  }

//creamos los observables a los que despues nos subscribiremos en el componente donde queramos tomar el estado y rol del usuario
  isLogged$: Observable<boolean> = this.isLoggedSubject.asObservable();
  isAdmin$: Observable<boolean> = this.isAdminSubject.asObservable();

  //metodo que se usa cuando el usuario inicia sesion para cambiar el valor a true 
  setLoggedStatus(isLogged: boolean) {
    this.isLoggedSubject.next(isLogged);
    localStorage.setItem('isLogged', isLogged ? 'true' : 'false');
  }

  //metodo que se usa cuando el usuario se loggea como administrador para cambiar el valor a true
  setAdminStatus(isAdmin: boolean){
    this.isAdminSubject.next(isAdmin);
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
  }

 
  // metodo para cerrar sesion
  logout() {
    
    this.auth.cerrarSesion()
    this.setLoggedStatus(false); // Marca al usuario como desconectado
    this.setAdminStatus(false);
    // Limpia cualquier otra información relacionada con la sesión
    // (por ejemplo, token de autenticación, datos del usuario, etc.).
    this.router.navigate(['home'])

  }

  
}
