import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-saber-mas',
  templateUrl: './modal-saber-mas.component.html',
  styleUrls: ['./modal-saber-mas.component.css']
})
export class ModalSaberMasComponent {
  @Input() modalId = 0
}
