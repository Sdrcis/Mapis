import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas1cPage } from './normativas1c.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas1cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas1cPageRoutingModule {}
