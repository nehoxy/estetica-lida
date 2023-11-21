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
  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private auth:AuthService, private router:Router, private firestore:AngularFirestore, private authF:AngularFireAuth) { 
    const storedIsLogged = localStorage.getItem('isLogged');
    if (storedIsLogged) {
      this.isLoggedSubject.next(storedIsLogged === 'true');
    }
  }


  isLogged$: Observable<boolean> = this.isLoggedSubject.asObservable();

  setLoggedStatus(isLogged: boolean) {
    this.isLoggedSubject.next(isLogged);
    localStorage.setItem('isLogged', isLogged ? 'true' : 'false');
  }

 

  logout() {
    
    this.auth.cerrarSesion()
    this.setLoggedStatus(false); // Marcar al usuario como desconectado
    // Limpia cualquier otra información relacionada con la sesión
    // (por ejemplo, token de autenticación, datos del usuario, etc.).
    // Puedes agregar más lógica aquí si es necesario.
    this.router.navigate(['home'])

  }

  
}
