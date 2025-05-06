import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink30Page } from './otrolink30.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink30PageRoutingModule {}
