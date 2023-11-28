import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudProductosService } from '../../services/crud-productos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";

@Component({
    selector: 'app-form-productos-admin',
    templateUrl: './form-productos-admin.component.html',
    styleUrls: ['./form-productos-admin.component.css']
})
export class FormProductosAdminComponent {
    // variable del ngx-pagination
    p: number = 1

    //arreglo para coleccion de productos
    coleccionProductos: Producto[] = [];
    productoSeleccionado!: Producto; // ! -> toma valores vacios
    modalVisibleProducto: boolean = false;
    //barra de  busqueda
    busqueda: string = ''
    filtro: string = ''
    //nuevo form de productos con sus atributos
    producto = new FormGroup({
        nombre: new FormControl('', Validators.required),
        precio: new FormControl(0, Validators.required),
        descripcion: new FormControl('', Validators.required),
        categoria: new FormControl('-1', Validators.required),
        imagen: new FormControl('', Validators.required),
        stock: new FormControl(0, Validators.required)

    })
    //inyectamos servicio
    constructor(public servicioCrudProductos: CrudProductosService) { }


    ngOnInit(): void {
        //se muestran todos los productos al inicio
        this.servicioCrudProductos.obtenerProducto().subscribe(producto => {
            this.coleccionProductos = producto
        })
    }
    //metodo asincronica para agregar productos
    async agregarProducto() {
        if (this.producto.valid) {
            let nuevoProducto: Producto = {
                idProducto: '',
                //'value' toma los valores de cada atributo
                nombre: this.producto.value.nombre!,
                precio: this.producto.value.precio!,
                descripcion: this.producto.value.descripcion!,
                categoria: this.producto.value.categoria!,
                imagen: this.producto.value.imagen!,
                stock: this.producto.value.stock!
            }
            //te agrega el nuevo producto
            await this.servicioCrudProductos.crearProducto(nuevoProducto).
                then(producto => {
                    Swal.fire({
                        icon: 'success',
                        iconColor: '#C8ECCB',
                        confirmButtonColor: '#BB8588',
                        text: '¡Se ha agregado un nuevo producto con exito!',
                    })
                    //se resetean los select
                    this.producto.reset({ categoria: '-1', precio: 0 })
                })
                .catch(error => {
                    alert("Hubo un error al cargar el nuevo producto:( \n" + error);
                })
        } else {
            alert('error')
        }
    }

    //modal para editar
    mostrarEditar(productoSeleccionado: Producto) {
        this.productoSeleccionado = productoSeleccionado;
        //muestra los datos en input para poder editarlos
        this.producto.setValue({
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            descripcion: productoSeleccionado.descripcion,
            categoria: productoSeleccionado.categoria,
            imagen: productoSeleccionado.imagen,
            stock: productoSeleccionado.stock
        })
    }
    //metodo para editar producto
    editarProducto() {
        let datos: Producto = {
            idProducto: this.productoSeleccionado.idProducto,
            nombre: this.producto.value.nombre!,
            precio: this.producto.value.precio!,
            descripcion: this.producto.value.descripcion!,
            categoria: this.producto.value.categoria!,
            imagen: this.producto.value.imagen!,
            stock: this.producto.value.stock!
        }
        //modifica el producto seleccionado
        this.servicioCrudProductos.modificarProducto(this.productoSeleccionado.idProducto, datos)
            .then(producto => {
                Swal.fire({
                    icon: 'success',
                    iconColor: '#C8ECCB',
                    confirmButtonColor: '#BB8588',
                    text: '¡Se ha editado el producto con exito!',
                })
                //resetea los select
                this.producto.reset({ categoria: '-1', precio: 0 })
            })
            .catch(error => {
                alert("Hubo un error al cargar el nuevo producto:( \n" + error);
            })

    }
    //metodo para resetear el form
    resetearForm() {
        this.producto.reset({ categoria: "-1", precio: 0 })
    }
    //modal para eliminar producto
    mostrarBorrar(productoSeleccionado: Producto) { //boton eliminar
        this.modalVisibleProducto = true;
        this.productoSeleccionado = productoSeleccionado;
        //alert de confirmacion
        Swal.fire({
            title: 'Borrar producto',
            text: "¿Estas seguro de querer borrar el producto " + productoSeleccionado.nombre + "?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            //para confirmar la eliminacion del producto
            if (result.isConfirmed) {

                this.borrarProducto()

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {

            }
        })
    }

    borrarProducto() { //metodo para eliminar producto
        //agarra el ID del producto seleccionado
        this.servicioCrudProductos.eliminarProducto(this.productoSeleccionado.idProducto)
            .then(respuesta => {
                Swal.fire({
                    icon: 'success',
                    iconColor: '#C8ECCB',
                    confirmButtonColor: '#BB8588',
                    text: '¡Se ha eliminado el producto con exito!',
                })
            })
            .catch(error => {
                alert("No se ha podido eliminar el producto: \n" + error);
            })
    }
}
