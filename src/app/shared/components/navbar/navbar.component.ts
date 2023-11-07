import { Component, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from 'src/app/modules/auth/pages/login/login.component';
import { IsLoggedInService } from '../../services/is-logged-in.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [LoginComponent]
})
export class NavbarComponent {
  isLogged:boolean;

  constructor(private logged:IsLoggedInService){
  }

  ngOnInit() {
    this.logged.isLogged$.subscribe((isLogged) => {
      this.isLogged = isLogged;
    });
  }
}
