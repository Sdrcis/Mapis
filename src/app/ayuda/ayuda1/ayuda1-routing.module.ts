import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ayuda1Page } from './ayuda1.page';

const routes: Routes = [
  {
    path: '',
    component: Ayuda1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ayuda1PageRoutingModule {}
