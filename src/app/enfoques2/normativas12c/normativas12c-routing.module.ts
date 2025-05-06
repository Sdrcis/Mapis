import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas12cPage } from './normativas12c.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas12cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas12cPageRoutingModule {}
