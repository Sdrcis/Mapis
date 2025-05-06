import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Acciones222Page } from './acciones222.page';

const routes: Routes = [
  {
    path: '',
    component: Acciones222Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Acciones222PageRoutingModule {}
