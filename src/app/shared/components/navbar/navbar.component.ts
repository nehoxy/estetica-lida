import { Component, Output, EventEmitter, Input } from '@angular/core';
import { LoginComponent } from 'src/app/modules/auth/pages/login/login.component';
import { IsLoggedInService } from '../../services/is-logged-in.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { take } from 'rxjs';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [LoginComponent]
})
export class NavbarComponent {
  
  // declaro las variables para comprar la sesion
  isLogged:boolean;
  isAdmin:boolean;

  /* inyecto el servicio isLoggedc y me subscribo al observaboe para observar los cambios y saber si el usuario esta registrado y si es admin, es importante subscribirse porque la sesion puede cambiar en cualquier momento.
  */
  constructor(private logged:IsLoggedInService){
    this.logged.isLogged$.subscribe((isLogged) => {
      this.isLogged = isLogged;
    });

    this.logged.isAdmin$.subscribe((isAdmin)=>{
      this.isAdmin = isAdmin
    })

    
  }

  /*este metodo se utiliza en el anchor de la navbar "cerrar sesion", el metodo logout del servicio logged convierte los valores isLogged y isAdmin en false.*/

  logout() {
    this.logged.logout();
    Swal.fire({
      icon: 'success',
      iconColor: '#C8ECCB',
      buttonsStyling:false,
      customClass:{
          confirmButton:'btn btn-sweetalert'
      },
      text: '¡Has cerrado sesion con exito!',
    })
    // Realiza cualquier otra acción necesaria al cerrar sesión, como redirigir al usuario.
  }

  ngOnInit() {
    

  }
 


}
