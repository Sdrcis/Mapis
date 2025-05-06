import { Component } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { ModalController } from '@ionic/angular';
import { ModalDescripcionComponent } from '../../components/modal-descripcion/modal-descripcion.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-violenciometro',
  templateUrl: './violenciometro.page.html',
  styleUrls: ['./violenciometro.page.scss'],
})
export class ViolenciometroPage {
  public chartLabels: string[] = [];
  public chartData = {
    labels: [] as string[],
    datasets: [
      {
        data: [] as number[],
        backgroundColor: [] as string[],
      },
    ],
  };
  public chartType: ChartType = 'doughnut';
  public chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  public selectedAction = '';
  public mostrarGrafico = false;
  public nivelActual = '';
  public mensajeNivel = '';

  public nivelesViolencia = [
    {
      nombre: 'Alerta',
      acciones: ['Controlar', 'Celar', 'Mentir', 'Ignorar', 'Intimidar'],
      color: '#fcd34d',
    },
    {
      nombre: 'Reacción',
      acciones: ['Prohibir', 'Destruir cosas', 'Insultar', 'Manosear'],
      color: '#f97316',
    },
    {
      nombre: 'Urgente',
      acciones: ['Golpear', 'Amenazar con objetos', 'Violar', 'Asesinar'],
      color: '#dc2626',
    },
  ];
  constructor(private modalCtrl: ModalController, private location: Location) {}

  private descripciones: Record<string, string> = {
    Alerta:
      'Este es un nivel inicial. Aunque no hay agresión física, sí existen señales que pueden escalar.',
    Reacción:
      'Este es un nivel medio. Ya se manifiestan agresiones verbales o psicológicas.',
    Urgente:
      'Este es un nivel alto. Involucra agresiones físicas graves o amenazas directas.',
  };

  goBack() {
    this.location.back();
  }
  async actualizarGrafico() {
    if (!this.selectedAction) {
      this.mostrarGrafico = false;
      return;
    }

    const nivel = this.nivelesViolencia.find((n) =>
      n.acciones.includes(this.selectedAction)
    );

    if (nivel) {
      this.chartData = {
        labels: [nivel.nombre],
        datasets: [
          {
            data: [nivel.acciones.length],
            backgroundColor: [nivel.color],
          },
        ],
      };

      this.nivelActual = nivel.nombre;
      this.mensajeNivel = this.descripciones[nivel.nombre];
      this.mostrarGrafico = true;

      console.log('✅ Gráfico actualizado:', this.chartData);

      // Mostrar modal automáticamente
      this.mostrarDescripcion(nivel.nombre);
    } else {
      this.chartData = {
        labels: [],
        datasets: [],
      };
      this.mostrarGrafico = false;
    }
  }

  async mostrarDescripcion(nivel: string) {
    const mensaje = this.descripciones[nivel];
    const modal = await this.modalCtrl.create({
      component: ModalDescripcionComponent,
      componentProps: {
        titulo: nivel,
        mensaje: mensaje,
      },
    });

    return await modal.present();
  }
}
