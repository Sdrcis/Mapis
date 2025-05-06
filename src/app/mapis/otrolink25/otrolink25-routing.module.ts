import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink25Page } from './otrolink25.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink25PageRoutingModule {}
