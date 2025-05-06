import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineamientodeacPage } from './lineamientodeac.page';

const routes: Routes = [
  {
    path: '',
    component: LineamientodeacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineamientodeacPageRoutingModule {}
