import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MySearchPage } from 'src/app/my-search/my-search.page';

@Component({
  selector: 'app-ayuda3',
  templateUrl: './ayuda3.page.html',
  styleUrls: ['./ayuda3.page.scss'],
})
export class Ayuda3Page implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  async openModal(){
    const modal = await this.modalCtrl.create({
    component: MySearchPage,
    cssClass: 'small-modal',
    componentProps: { value: 123 }
    
    });
  
    await modal.present();
  
  }
  ngOnInit() {
  }
}
