import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink1Page } from './otrolink1.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink1PageRoutingModule {}
