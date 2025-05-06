import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas13b33Page } from './normativas13b33.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas13b33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas13b33PageRoutingModule {}
