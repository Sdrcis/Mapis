import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Procedimineto333Page } from './procedimineto333.page';

const routes: Routes = [
  {
    path: '',
    component: Procedimineto333Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Procedimineto333PageRoutingModule {}
