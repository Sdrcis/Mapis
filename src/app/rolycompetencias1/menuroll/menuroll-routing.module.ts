import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenurollPage } from './menuroll.page';

const routes: Routes = [
  {
    path: '',
    component: MenurollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenurollPageRoutingModule {}
