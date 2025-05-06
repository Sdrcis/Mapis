import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap6Page } from './normativaap6.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap6PageRoutingModule {}
