import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { MenuController, ModalController } from '@ionic/angular';
import { MySearchPage } from '../my-search/my-search.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  @ViewChild('swiper') swiper:SwiperComponent;


  config: SwiperOptions={
    slidesPerView: 2,
  };
  constructor(private menu: MenuController,private modalCtrl: ModalController) {}
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }
  async openModal(){
    const modal = await this.modalCtrl.create({
    component: MySearchPage,
    cssClass: 'small-modal',
    componentProps: { value: 123 }
    
    });
  
    await modal.present();
  
  }

}
