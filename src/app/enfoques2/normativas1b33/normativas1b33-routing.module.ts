import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas1b33Page } from './normativas1b33.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas1b33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas1b33PageRoutingModule {}
