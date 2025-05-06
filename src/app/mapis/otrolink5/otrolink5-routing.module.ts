import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink5Page } from './otrolink5.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink5PageRoutingModule {}
