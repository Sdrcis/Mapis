import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cicloviolencia',
  templateUrl: './cicloviolencia.page.html',
  styleUrls: ['./cicloviolencia.page.scss'],
})
export class CicloviolenciaPage implements OnInit {
  esReverso = false;

  constructor(private location: Location) {}

  voltear() {
    this.esReverso = !this.esReverso;
  }
  ngOnInit() {}

  goBack() {
    this.location.back();
  }
}
