import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap2Page } from './normativaap2.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap2PageRoutingModule {}
