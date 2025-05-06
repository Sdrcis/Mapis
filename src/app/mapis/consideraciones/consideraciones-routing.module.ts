import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsideracionesPage } from './consideraciones.page';

const routes: Routes = [
  {
    path: '',
    component: ConsideracionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsideracionesPageRoutingModule {}
