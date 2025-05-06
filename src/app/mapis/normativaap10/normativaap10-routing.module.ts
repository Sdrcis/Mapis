import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap10Page } from './normativaap10.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap10PageRoutingModule {}
