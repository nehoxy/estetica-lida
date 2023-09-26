import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSaberMasComponent } from '../components/modal-saber-mas/modal-saber-mas.component';
import { ModalServiciosData } from 'src/app/models/modal-servicios-data';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog:MatDialog) { }

  openDialog(data:ModalServiciosData ){
    this.matDialog.open(ModalSaberMasComponent, {data})
  }

}
