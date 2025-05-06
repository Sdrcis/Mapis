import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink14Page } from './otrolink14.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink14PageRoutingModule {}
