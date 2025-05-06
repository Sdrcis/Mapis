import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap102Page } from './normativaap102.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap102Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap102PageRoutingModule {}
