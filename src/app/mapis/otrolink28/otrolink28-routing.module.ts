import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink28Page } from './otrolink28.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink28PageRoutingModule {}
