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
  displayedColumns: string[] = ['position','cliente', 'pago', 'fecha', 'metodopago','metodoenvio','envio','costoenvio','montoTotal'];
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
  metodoenvio:string;
  envio:string;
  costoenvio:string;
  montoTotal:string;
  }

  const CLIENT_DATA: TablaVentas[] = [
  {position: 1, cliente: 'Hydrogen', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 2, cliente: 'Helium', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 3, cliente: 'Lithium', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 4, cliente: 'Beryllium', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 5, cliente: 'Boron', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000' },
  {position: 6, cliente: 'Carbon', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'}, 
  {position: 7, cliente: 'Nitrogen', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 8, cliente: 'Oxygen', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 9, cliente: 'Fluorine', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 10, cliente: 'Neon', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 11, cliente: 'Sodium', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 12, cliente: 'Magnesium', pago: 'realizado', fecha: '1/1/1' , metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 13, cliente: 'Aluminum', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 14, cliente: 'Silicon', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 15, cliente: 'Phosphorus', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 16, cliente: 'Sulfur', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 17, cliente: 'Chlorine', pago: 'realizado' , fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 18, cliente: 'Argon', pago: 'realizado' , fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 19, cliente: 'Potassium', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000'},
  {position: 20, cliente: 'Calcium', pago: 'realizado', fecha: '1/1/1', metodopago:'efectivo', metodoenvio:'envio express', envio:'pendiente', costoenvio:'$1000', montoTotal:'$1000' },
  ];

