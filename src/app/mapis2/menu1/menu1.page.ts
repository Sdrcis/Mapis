import { Component, OnInit } from '@angular/core';
import { UpcService } from '../../services/upc.service';


@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.page.html',
  styleUrls: ['./menu1.page.scss'],
})
export class Menu1Page implements OnInit {

  constructor(private documentService: UpcService) { }

  ngOnInit() {
  }
  
  descargarPDF(url: string) {
    this.documentService.abrirEnNuevaPestana(url);
  }

}
