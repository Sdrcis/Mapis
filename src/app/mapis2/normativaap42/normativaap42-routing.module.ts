import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap42Page } from './normativaap42.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap42PageRoutingModule {}
