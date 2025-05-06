import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink8Page } from './otrolink8.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink8PageRoutingModule {}
