import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap82Page } from './normativaap82.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap82Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap82PageRoutingModule {}
