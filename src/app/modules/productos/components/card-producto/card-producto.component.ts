import { Component } from '@angular/core';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {
  listaProductos = [
    {
      id:1, 
      titulo:"Crema para manos",
      precio:4700,
      imagen:".../../../../../assets/img-card-producto/crema.png",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      id:2, 
      titulo:"Protector solar",
      precio:4000,
      imagen:"../../../../../assets/img-card-producto/protector.png",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      id:3, 
      titulo:"Serum",
      precio:3000,
      imagen:"../../../../../assets/img-card-producto/serum.png",
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
  ]
}
