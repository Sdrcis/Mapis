import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap17Page } from './normativaap17.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap17PageRoutingModule {}
