import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasospsiPage } from './casospsi.page';

const routes: Routes = [
  {
    path: '',
    component: CasospsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasospsiPageRoutingModule {}
