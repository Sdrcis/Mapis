import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas7bPage } from './normativas7b.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas7bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas7bPageRoutingModule {}
