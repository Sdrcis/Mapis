import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casos2Page } from './casos2.page';

const routes: Routes = [
  {
    path: '',
    component: Casos2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casos2PageRoutingModule {}
