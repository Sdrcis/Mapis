import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink4Page } from './otrolink4.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink4PageRoutingModule {}
