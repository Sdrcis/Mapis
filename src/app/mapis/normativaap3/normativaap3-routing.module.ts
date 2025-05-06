import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap3Page } from './normativaap3.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap3PageRoutingModule {}
