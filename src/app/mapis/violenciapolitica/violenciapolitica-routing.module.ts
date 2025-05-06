import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciapoliticaPage } from './violenciapolitica.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciapoliticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciapoliticaPageRoutingModule {}
