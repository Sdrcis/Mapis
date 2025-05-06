import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink10Page } from './otrolink10.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink10PageRoutingModule {}
