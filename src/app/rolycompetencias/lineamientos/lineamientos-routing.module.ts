import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineamientosPage } from './lineamientos.page';

const routes: Routes = [
  {
    path: '',
    component: LineamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineamientosPageRoutingModule {}
