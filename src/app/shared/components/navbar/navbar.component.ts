import { Component, Output, EventEmitter } from '@angular/core';
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
  isLogged:boolean;
  administrador:boolean;
  constructor(private logged:IsLoggedInService, private servicioAuth:AuthService){
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
    this.checkUserRole()
  }

  async checkUserRole() {
    try {
      const uid = await this.servicioAuth.getUid();

      if (uid) {
        const userData = await this.servicioAuth.getUserData(uid).pipe(take(1)).toPromise();

        if (userData && userData['rol']) {
          const userRole = userData['rol'];
          console.log('User Role:', userRole);
          if(userRole === 'administrador'){
            this.administrador = true;
          }
          // Ahora puedes realizar acciones basadas en el rol del usuario
          // Por ejemplo, redirigir a diferentes rutas o mostrar componentes específicos
        } else {
          console.log('No se encontró información del usuario o el rol.');
        }
      } else {
        console.log('No se pudo obtener el UID del usuario.');
      }
    } catch (error) {
      console.error('Error al obtener información del usuario:', error);
    }
  }
}
