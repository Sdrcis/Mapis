import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntercPage } from './interc.page';

const routes: Routes = [
  {
    path: '',
    component: IntercPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntercPageRoutingModule {}
