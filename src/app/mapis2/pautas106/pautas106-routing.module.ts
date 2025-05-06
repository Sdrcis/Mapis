import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas106Page } from './pautas106.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas106Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas106PageRoutingModule {}
