import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap52Page } from './normativaap52.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap52Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap52PageRoutingModule {}
