import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-descripcion',
  templateUrl: './modal-descripcion.component.html',
  styleUrls: ['./modal-descripcion.component.scss'],
})
export class ModalDescripcionComponent {
  @Input() titulo!: string;
  @Input() mensaje!: string;

  constructor(private modalCtrl: ModalController) {}

  cerrar() {
    this.modalCtrl.dismiss();
  }
}
