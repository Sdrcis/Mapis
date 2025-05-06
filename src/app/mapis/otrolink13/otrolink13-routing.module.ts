import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink13Page } from './otrolink13.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink13PageRoutingModule {}
