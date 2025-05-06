import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativa13Page } from './normativa13.page';

const routes: Routes = [
  {
    path: '',
    component: Normativa13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativa13PageRoutingModule {}
