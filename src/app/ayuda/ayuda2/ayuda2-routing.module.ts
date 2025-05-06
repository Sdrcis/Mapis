import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ayuda2Page } from './ayuda2.page';

const routes: Routes = [
  {
    path: '',
    component: Ayuda2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ayuda2PageRoutingModule {}
