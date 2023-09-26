import { Component,AfterViewInit,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-ventas-administrador',
  templateUrl: './tabla-ventas-administrador.component.html',
  styleUrls: ['./tabla-ventas-administrador.component.css'],
})

export class TablaVentasAdministradorComponent implements AfterViewInit {
  displayedColumns: string[] = ['position','cliente', 'pago', 'fecha', 'metodopago','metodoenvio','envio','costoenvio','montoTotal', 'archivar'];
  dataSource = new MatTableDataSource<TablaVentas>(CLIENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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
  {position: 2, cliente: 'María González', pago: 'pendiente', fecha: '2023-09-26', metodopago:'efectivo', metodoenvio:'envío estándar', envio:'completado', costoenvio:'$800', montoTotal:'$3500'},

  {position: 3, cliente: 'Pedro Rodríguez', pago: 'realizado', fecha: '2023-09-27', metodopago:'tarjeta de débito', metodoenvio:'envío express', envio:'completado', costoenvio:'$1200', montoTotal:'$6000'}
,
  {position: 4, cliente: 'Ana López', pago: 'pendiente', fecha: '2023-09-28', metodopago:'transferencia bancaria', metodoenvio:'envío estándar', envio:'pendiente', costoenvio:'$900', montoTotal:'$2800'},

  {position: 5, cliente: 'Luis Fernández', pago: 'realizado', fecha: '2023-09-29', metodopago:'cheque', metodoenvio:'envío express', envio:'pendiente', costoenvio:'$1100', montoTotal:'$4200'},

  {position: 6, cliente: 'Marta Pérez', pago: 'pendiente', fecha: '2023-09-30', metodopago:'efectivo', metodoenvio:'envío estándar', envio:'completado', costoenvio:'$950', montoTotal:'$3300'},

  {position: 7, cliente: 'Carlos Sánchez', pago: 'realizado', fecha: '2023-10-01', metodopago:'tarjeta de crédito', metodoenvio:'envío express', envio:'pendiente', costoenvio:'$1300', montoTotal:'$5500'},

  {position: 8, cliente: 'Laura González', pago: 'pendiente', fecha: '2023-10-02', metodopago:'efectivo', metodoenvio:'envío estándar', envio:'completado', costoenvio:'$850', montoTotal:'$3700'},

  {position: 9, cliente: 'Javier Martínez', pago: 'realizado', fecha: '2023-10-03', metodopago:'transferencia bancaria', metodoenvio:'envío express', envio:'completado', costoenvio:'$1150', montoTotal:'$4900'},

  {position: 10, cliente: 'Sofía Rodríguez', pago: 'pendiente', fecha: '2023-10-04', metodopago:'cheque', metodoenvio:'envío estándar', envio:'pendiente', costoenvio:'$1000', montoTotal:'$4000'},

  {position: 11, cliente: 'Diego López', pago: 'realizado', fecha: '2023-10-05', metodopago:'efectivo', metodoenvio:'envío express', envio:'completado', costoenvio:'$1250', montoTotal:'$5300'},

  {position: 12, cliente: 'Isabel Fernández', pago: 'pendiente', fecha: '2023-10-06', metodopago:'tarjeta de crédito', metodoenvio:'envío estándar', envio:'pendiente', costoenvio:'$950', montoTotal:'$3700'},

  {position: 13, cliente: 'Manuel Pérez', pago: 'realizado', fecha: '2023-10-07', metodopago:'transferencia bancaria', metodoenvio:'envío express', envio:'completado', costoenvio:'$1100', montoTotal:'$4500'},

  {position: 14, cliente: 'Carmen Sánchez', pago: 'pendiente', fecha: '2023-10-08', metodopago:'cheque', metodoenvio:'envío estándar', envio:'completado', costoenvio:'$900', montoTotal:'$3200'},

  {position: 15, cliente: 'Ricardo Martínez', pago: 'realizado', fecha: '2023-10-09', metodopago:'efectivo', metodoenvio:'envío express', envio:'pendiente', costoenvio:'$1300', montoTotal:'$5500'}
  ];

