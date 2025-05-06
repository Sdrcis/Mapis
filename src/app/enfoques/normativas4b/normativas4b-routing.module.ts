import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas4bPage } from './normativas4b.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas4bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas4bPageRoutingModule {}
