import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas8Page } from './pautas8.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas8PageRoutingModule {}
