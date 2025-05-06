import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas1bPage } from './normativas1b.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas1bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas1bPageRoutingModule {}
