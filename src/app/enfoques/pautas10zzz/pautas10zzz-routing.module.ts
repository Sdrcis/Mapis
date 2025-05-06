import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas10zzzPage } from './pautas10zzz.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas10zzzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas10zzzPageRoutingModule {}
