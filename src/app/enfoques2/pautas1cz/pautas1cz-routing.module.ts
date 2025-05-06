import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas1czPage } from './pautas1cz.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas1czPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas1czPageRoutingModule {}
