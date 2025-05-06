import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciapsicologicaPage } from './violenciapsicologica.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciapsicologicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciapsicologicaPageRoutingModule {}
