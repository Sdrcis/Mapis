import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciafisicaPage } from './violenciafisica.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciafisicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciafisicaPageRoutingModule {}
