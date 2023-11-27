import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class IsLoggedInService {
  //crea el sujeto valor booleano para despues subscribirse
  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private auth:AuthService, private router:Router) { 
    //crea el valor en el local storage 
    const storedIsLogged = localStorage.getItem('isLogged');
    //si el usuario esta logeado poner true en el local storage 
    if (storedIsLogged) {
      this.isLoggedSubject.next(storedIsLogged === 'true');
    }
  }

//crea un observable
  isLogged$: Observable<boolean> = this.isLoggedSubject.asObservable();
//funcion que se usa cuando el usuario inicia sesion para cambiar el valor a true 
  setLoggedStatus(isLogged: boolean) {
    this.isLoggedSubject.next(isLogged);
    localStorage.setItem('isLogged', isLogged ? 'true' : 'false');
  }

  //funcion para cerrar sesion
  logout() {
    
    this.auth.cerrarSesion()
    this.setLoggedStatus(false); // Marcar al usuario como desconectado
    // Limpia cualquier otra información relacionada con la sesión
    // (por ejemplo, token de autenticación, datos del usuario, etc.).
    // Puedes agregar más lógica aquí si es necesario.
    this.router.navigate(['home'])

  }
}
