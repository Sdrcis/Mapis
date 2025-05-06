import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas14bPage } from './normativas14b.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas14bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas14bPageRoutingModule {}
