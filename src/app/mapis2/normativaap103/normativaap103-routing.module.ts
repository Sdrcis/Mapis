import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap103Page } from './normativaap103.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap103Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap103PageRoutingModule {}
