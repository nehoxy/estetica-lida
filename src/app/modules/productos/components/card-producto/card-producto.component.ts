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
  filtroPrecio:string = ''

  
  productoSeleccionado! :Producto; // '!' toma valores vacios o 'any'

  
  constructor(public servicioProductosCrud:CrudProductosService){
    this.servicioProductosCrud.obtenerProducto().subscribe(producto => {
      // Manejar los resultados, por ejemplo, asignarlos a una propiedad en tu componente
      this.listaProductos = producto;});
  }

  ngOnInit() :void {
   //this.mostrarProducto()

   if(this.filtro=='cremas'){
    this.mostrarCremas()
   }else{
   }
  }

  cambiarOrden(event: any) {
    const valorSeleccionado = event.target.value;

    if (valorSeleccionado === '1') {
      // Ordenar por mayor precio
      this.servicioProductosCrud.obtenerProductoPrecioMayor().subscribe(producto => {
        // Manejar los resultados, por ejemplo, asignarlos a una propiedad en tu componente
        this.listaProductos = producto;
      });
    } else if (valorSeleccionado === '2') {
      // Ordenar por menor precio
      this.servicioProductosCrud.obtenerProductoPrecioMenor().subscribe(producto => {
        // Manejar los resultados, por ejemplo, asignarlos a una propiedad en tu componente
        this.listaProductos = producto;
      });
    } else {
      // Ordenar por defecto (puedes ajustar esto según tus necesidades)
      this.servicioProductosCrud.obtenerProducto().subscribe(producto => {
        // Manejar los resultados, por ejemplo, asignarlos a una propiedad en tu componente
        this.listaProductos = producto;
      });
    }
  }

  mostrarProducto(){

    this.servicioProductosCrud.obtenerProducto().subscribe(producto => {
      this.listaProductos = producto;
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
        this.maquillajes.push(producto)
      }
    })
  }
  mostrarMascarillas(){
    this.listaProductos.forEach(producto =>{
      if(producto.categoria === "mascarillas"){
        this.mascarillas.push(producto)
      }
    })
  }
  mostrarJabones(){
    this.listaProductos.forEach(producto =>{
      if(producto.categoria === "jabones"){
        this.jabones.push(producto)
      }
    })
  }
  

 
}
