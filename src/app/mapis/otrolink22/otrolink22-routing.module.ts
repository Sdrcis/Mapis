import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink22Page } from './otrolink22.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink22PageRoutingModule {}
