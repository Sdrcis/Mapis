import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VigilanciacomunitariaPage } from './vigilanciacomunitaria.page';

const routes: Routes = [
  {
    path: '',
    component: VigilanciacomunitariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VigilanciacomunitariaPageRoutingModule {}
