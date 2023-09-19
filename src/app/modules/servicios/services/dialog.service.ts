import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSaberMasComponent } from '../components/modal-saber-mas/modal-saber-mas.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog:MatDialog) { }

  openDialog(){
    this.matDialog.open(ModalSaberMasComponent)
  }
}
