import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink2Page } from './otrolink2.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink2PageRoutingModule {}
