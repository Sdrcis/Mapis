import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas15ccPage } from './normativas15cc.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas15ccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas15ccPageRoutingModule {}
