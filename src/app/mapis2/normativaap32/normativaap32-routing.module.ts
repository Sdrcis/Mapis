import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap32Page } from './normativaap32.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap32PageRoutingModule {}
