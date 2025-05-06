import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink9Page } from './otrolink9.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink9PageRoutingModule {}
