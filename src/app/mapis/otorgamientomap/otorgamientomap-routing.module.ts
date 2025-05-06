import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtorgamientomapPage } from './otorgamientomap.page';

const routes: Routes = [
  {
    path: '',
    component: OtorgamientomapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtorgamientomapPageRoutingModule {}
