import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-tabla-ventas-administrador',
  templateUrl: './tabla-ventas-administrador.component.html',
  styleUrls: ['./tabla-ventas-administrador.component.css'],
  standalone:true,
  imports: [MatTableModule, MatPaginatorModule],
})

export class TablaVentasAdministradorComponent implements AfterViewInit {
  displayedColumns: string[] = ['position','cliente', 'pago', 'fecha', 'metodopago'];
  dataSource = new MatTableDataSource<TablaVentas>(CLIENT_DATA);

  @ViewChild(MatPaginator) paginator:any = MatPaginator;

  ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
  }
}





  export interface TablaVentas {
  position: number;
  cliente: string;
  pago:string;
  fecha: string;
  metodopago: string;
  }

  const CLIENT_DATA: TablaVentas[] = [
  {position: 1, cliente: 'Hydrogen', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo'},
  {position: 2, cliente: 'Helium', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo'},
  {position: 3, cliente: 'Lithium', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo'},
  {position: 4, cliente: 'Beryllium', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo'},
  {position: 5, cliente: 'Boron', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo' },
  {position: 6, cliente: 'Carbon', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo'}, 
  {position: 7, cliente: 'Nitrogen', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo'},
  {position: 8, cliente: 'Oxygen', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo'},
  {position: 9, cliente: 'Fluorine', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo'},
  {position: 10, cliente: 'Neon', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo'},
  {position: 11, cliente: 'Sodium', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo'},
  {position: 12, cliente: 'Magnesium', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo'},
  {position: 13, cliente: 'Aluminum', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo'},
  {position: 14, cliente: 'Silicon', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo'},
  {position: 15, cliente: 'Phosphorus', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo'},
  {position: 16, cliente: 'Sulfur', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo'},
  {position: 17, cliente: 'Chlorine', pago: 'realizado' , fecha: '1/1/1', metodopago:'efectivo'},
  {position: 18, cliente: 'Argon', pago: 'realizado' , fecha: '1/1/1', metodopago:'efectivo'},
  {position: 19, cliente: 'Potassium', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo'},
  {position: 20, cliente: 'Calcium', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo' },
  ];

