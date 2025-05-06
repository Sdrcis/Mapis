import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciaeconomicaPage } from './violenciaeconomica.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciaeconomicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciaeconomicaPageRoutingModule {}
