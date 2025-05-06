import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink29Page } from './otrolink29.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink29PageRoutingModule {}
