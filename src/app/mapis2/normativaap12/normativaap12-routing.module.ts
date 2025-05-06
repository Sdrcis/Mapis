import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap12Page } from './normativaap12.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap12PageRoutingModule {}
