import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciaginecoPage } from './violenciagineco.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciaginecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciaginecoPageRoutingModule {}
