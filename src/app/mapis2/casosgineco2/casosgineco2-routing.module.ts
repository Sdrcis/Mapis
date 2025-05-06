import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casosgineco2Page } from './casosgineco2.page';

const routes: Routes = [
  {
    path: '',
    component: Casosgineco2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casosgineco2PageRoutingModule {}
