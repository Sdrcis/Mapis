import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosgineccccPage } from './casosginecccc.page';

const routes: Routes = [
  {
    path: '',
    component: CasosgineccccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosgineccccPageRoutingModule {}
