import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink20Page } from './otrolink20.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink20PageRoutingModule {}
