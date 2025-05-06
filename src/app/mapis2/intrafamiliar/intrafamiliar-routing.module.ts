import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrafamiliarPage } from './intrafamiliar.page';

const routes: Routes = [
  {
    path: '',
    component: IntrafamiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrafamiliarPageRoutingModule {}
