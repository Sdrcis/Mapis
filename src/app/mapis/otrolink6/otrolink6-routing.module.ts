import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink6Page } from './otrolink6.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink6PageRoutingModule {}
