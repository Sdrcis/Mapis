import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas10bPage } from './pautas10b.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas10bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas10bPageRoutingModule {}
