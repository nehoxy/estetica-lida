import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudProductosService } from 'src/app/modules/administrador/services/crud-productos.service';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {

  listaProductos : Producto[] = [];
  
  cremas:Producto[] = []
  maquillajes:Producto[] = []
  mascarillas:Producto[] = []
  jabones:Producto[] = []
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
      this.mostrarCremas()
      this.mostrarMaquillajes()
      this.mostrarMascarillas()
      this.mostrarJabones()
    })
  }
  mostrarCremas(){
    this.listaProductos.forEach(producto =>{
      if(producto.categoria === "cremas"){
        this.cremas.push(producto)
      }
    })
    this.mostrarProducto()
  }
  mostrarMaquillajes(){
    this.listaProductos.forEach(producto =>{
      if(producto.categoria === "maquillajes"){
        this.cremas.push(producto)
      }
    })
  }
  mostrarMascarillas(){
    this.listaProductos.forEach(producto =>{
      if(producto.categoria === "mascarillas"){
        this.cremas.push(producto)
      }
    })
  }
  mostrarJabones(){
    this.listaProductos.forEach(producto =>{
      if(producto.categoria === "jabones"){
        this.cremas.push(producto)
      }
    })
  }
  

 
}
