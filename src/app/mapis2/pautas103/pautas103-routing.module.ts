import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pautas103Page } from './pautas103.page';

const routes: Routes = [
  {
    path: '',
    component: Pautas103Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pautas103PageRoutingModule {}
