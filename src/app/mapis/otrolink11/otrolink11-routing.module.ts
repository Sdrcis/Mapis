import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink11Page } from './otrolink11.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink11PageRoutingModule {}
