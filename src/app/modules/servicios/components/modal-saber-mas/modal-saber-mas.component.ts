import { Component, Input, Inject } from '@angular/core';
import { ModalServiciosData } from 'src/app/models/modal-servicios-data';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalData } from 'src/app/models/modal-data';
@Component({
  selector: 'app-modal-saber-mas',
  templateUrl: './modal-saber-mas.component.html',
  styleUrls: ['./modal-saber-mas.component.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
]
})
export class ModalSaberMasComponent {
  @Input() modalId = 0
  @Input() titulo: string;
  @Input() descripcion: string;
  
  cardData: any;
  modalData: ModalData;
  constructor(public bsModalRef: BsModalRef) {}

  closeModal() {
    this.bsModalRef.hide();
  }
 
 
}
