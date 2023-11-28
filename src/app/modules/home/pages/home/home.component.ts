import { Component } from '@angular/core';
import { take } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userData: any;

  constructor(private servicioAuth:AuthService){

  }
  
}
