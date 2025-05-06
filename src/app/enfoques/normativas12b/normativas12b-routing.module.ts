import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas12bPage } from './normativas12b.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas12bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas12bPageRoutingModule {}
