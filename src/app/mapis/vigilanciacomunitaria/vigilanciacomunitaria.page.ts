import { Component, OnInit } from '@angular/core';
import { UpcService } from '../../services/upc.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vigilanciacomunitaria',
  templateUrl: './vigilanciacomunitaria.page.html',
  styleUrls: ['./vigilanciacomunitaria.page.scss'],
})
export class VigilanciacomunitariaPage implements OnInit {
  uvcs: any[] = [];
  searchTerm = '';

  constructor(private upcService: UpcService, private navCtrl: NavController) {}

  ngOnInit() {
    this.upcService.obtenerUVCs().subscribe((data) => {
      this.uvcs = data;
    });
  }

  get filteredUvcs() {
    if (!this.searchTerm) return this.uvcs;

    const term = this.searchTerm.toLowerCase();

    return this.uvcs.filter((uvc) => {
      const contenido = JSON.stringify(uvc).toLowerCase();
      return contenido.includes(term);
    });
  }

  verEnMaps(uvc: any) {
    const lat = parseFloat(uvc['COORDENADA Y']);
    const lng = parseFloat(uvc['COORDENADA X']);

    if (isNaN(lat) || isNaN(lng)) {
      console.warn('❌ Coordenadas inválidas:', lat, lng);
      return;
    }

    const label = encodeURIComponent(
      uvc['NOMBRE CONOCIDO POR LA COMUNIDAD'] || 'Ubicación'
    );
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  }
}
