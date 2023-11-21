import { Component, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from 'src/app/modules/auth/pages/login/login.component';
import { IsLoggedInService } from '../../services/is-logged-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [LoginComponent]
})
export class NavbarComponent {
  isLogged:boolean;

  constructor(private logged:IsLoggedInService){
    this.logged.isLogged$.subscribe((isLogged) => {
      this.isLogged = isLogged;
    });
  }

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
