import { Component,OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-info-home',
  templateUrl: './info-home.component.html',
  styleUrls: ['./info-home.component.css']
})
export class InfoHomeComponent {

    ngOnInit(): void{
      AOS.init({disable: 'mobile'})
    }
}
