import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas14cPage } from './normativas14c.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas14cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas14cPageRoutingModule {}
