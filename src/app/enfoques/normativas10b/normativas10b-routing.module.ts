import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas10bPage } from './normativas10b.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas10bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas10bPageRoutingModule {}
