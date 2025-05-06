import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Procedimineto444Page } from './procedimineto444.page';

const routes: Routes = [
  {
    path: '',
    component: Procedimineto444Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Procedimineto444PageRoutingModule {}
