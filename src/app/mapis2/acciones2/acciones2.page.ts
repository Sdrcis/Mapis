import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-acciones2',
  templateUrl: './acciones2.page.html',
  styleUrls: ['./acciones2.page.scss'],
})
export class Acciones2Page implements OnInit {
  loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) {
   }
   ngOnInit() {
       this.showLoading();
   }
   async showLoading() {
      this.loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 3000,
    });

  }
dismissOnPageChange(){
  this.loading.present();
}
}
