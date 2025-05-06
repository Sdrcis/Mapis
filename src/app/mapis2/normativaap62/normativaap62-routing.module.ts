import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap62Page } from './normativaap62.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap62Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap62PageRoutingModule {}
