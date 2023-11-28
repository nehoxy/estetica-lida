import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudProductosService } from 'src/app/modules/administrador/services/crud-productos.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {

  listaProductos : Producto[] = [];
  
  busqueda:string = ''
  filtro:string = ''

  
  productoSeleccionado! :Producto; // '!' toma valores vacios o 'any'

  
  constructor(public servicioProductosCrud:CrudProductosService){
    
  }

  ngOnInit() :void {
   this.mostrarProducto()

  }

  mostrarProducto(){
    this.servicioProductosCrud.obtenerProducto().subscribe(producto => {
      this.listaProductos = producto;
  
    })
  }



  comprarProducto(){

    Swal.fire({
      icon: 'warning',
      confirmButtonColor: '#BB8588',
      title:'¡Lo sentimos!',
      text: 'Esta función aún no esta disponible.',
    })
  }
  

 
}
