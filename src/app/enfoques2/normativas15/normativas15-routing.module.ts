import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas15Page } from './normativas15.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas15PageRoutingModule {}
