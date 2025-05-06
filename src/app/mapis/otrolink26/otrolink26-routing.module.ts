import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink26Page } from './otrolink26.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink26PageRoutingModule {}
