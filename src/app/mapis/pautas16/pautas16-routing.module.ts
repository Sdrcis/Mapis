import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas16Page } from './pautas16.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas16PageRoutingModule {}
