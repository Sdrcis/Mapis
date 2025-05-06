import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas13bPage } from './pautas13b.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas13bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas13bPageRoutingModule {}
