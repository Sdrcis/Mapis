import { Component, OnInit } from '@angular/core';
import { UpcService } from '../../services/upc.service';
import { Diversidad, Categoria } from './diversidades.module';
import { Location } from '@angular/common';
@Component({
  selector: 'app-diversidades',
  templateUrl: './diversidades.page.html',
  styleUrls: ['./diversidades.page.scss'],
})
export class DiversidadesPage implements OnInit {
  tituloGeneral = '';
  descripcionGeneral = '';
  diversidades: Categoria[] = [];
  filteredDiversidades: Categoria[] = [];
  searchTerm = '';
  categoriaSeleccionada: string | null = null;

  constructor(private servicio: UpcService, private location: Location) {}

  ngOnInit() {
    this.servicio.obtenerDiversidades().subscribe((data: Diversidad) => {
      this.tituloGeneral = data.titulo_general;
      this.descripcionGeneral = data.descripcion_general;
      this.diversidades = data.categorias;
      this.filteredDiversidades = data.categorias;
    });
  }

  toggleCategoria(titulo: string) {
    this.categoriaSeleccionada =
      this.categoriaSeleccionada === titulo ? null : titulo;
  }
  goBack() {
    this.location.back();
  }
  filtrarDiversidades() {
    const term = this.searchTerm.toLowerCase();
    this.filteredDiversidades = this.diversidades.filter(
      (item) =>
        item.titulo.toLowerCase().includes(term) ||
        item.definicion.toLowerCase().includes(term) ||
        item.ejemplos.some((ej) => ej.toLowerCase().includes(term))
    );
  }
}
