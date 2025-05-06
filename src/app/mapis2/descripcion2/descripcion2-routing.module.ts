import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Descripcion2Page } from './descripcion2.page';

const routes: Routes = [
  {
    path: '',
    component: Descripcion2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Descripcion2PageRoutingModule {}
