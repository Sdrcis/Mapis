import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas14bPage } from './pautas14b.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas14bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas14bPageRoutingModule {}
