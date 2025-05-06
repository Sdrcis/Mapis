import { Component, OnInit } from '@angular/core';
import { UpcService } from '../../services/upc.service';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-upc-list',
  templateUrl: './upc-list.page.html',
  styleUrls: ['./upc-list.page.scss'],
})
export class UpcListPage implements OnInit {
  upcs: any[] = [];
  searchTerm: string = '';

  constructor(private upcService: UpcService, private navCtrl: NavController, private platform: Platform) {}

  ngOnInit() {
    this.upcService.getUpcs().subscribe(data => {
      this.upcs = data;
    });
  }
  

  get filteredUpcs() {
    if (!this.searchTerm) return this.upcs;
    return this.upcs.filter(upc =>
      upc['NOMBRE DEL ESTABLECIMIENTO POLICIAL']?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

 
  verEnMaps(upc: any) {
    const lat = parseFloat(upc['COORDENADA Y (NORTE)']);
    const lng = parseFloat(upc['COORDENADA X (ESTE)']);
  
    if (isNaN(lat) || isNaN(lng)) {
      console.warn('❌ Coordenadas inválidas:', lat, lng);
      return;
    }
  
    const label = encodeURIComponent(upc['NOMBRE DEL ESTABLECIMIENTO POLICIAL'] || 'Ubicación policial');
  
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  
    window.open(url, '_blank'); // Abre en nueva pestaña o app de Google Maps
  }
  
}
