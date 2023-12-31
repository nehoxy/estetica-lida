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
  p:number=1
  listaProductos : Producto[] = [];
  
  busqueda:string = ''
  filtro:string = ''
  filtroPrecio:string = ''

  
  productoSeleccionado! :Producto; // '!' toma valores vacios o 'any'

  
  constructor(public servicioProductosCrud:CrudProductosService){
    this.mostrarProducto()
  }

  ngOnInit() :void {
  
  }

  cambiarOrden(event: any) {
    const valorSeleccionado = event.target.value;

    if (valorSeleccionado === '1') {
      // Ordenar por mayor precio
      this.servicioProductosCrud.obtenerProductoPrecioMayor().subscribe(producto => {
        this.listaProductos = producto;
      });
    } else if (valorSeleccionado === '2') {
      // Ordenar por menor precio
      this.servicioProductosCrud.obtenerProductoPrecioMenor().subscribe(producto => {
        this.listaProductos = producto;
      });
    } else {
      // Ordenar por defecto
      this.servicioProductosCrud.obtenerProducto().subscribe(producto => {
        this.listaProductos = producto;
      });
    }
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
