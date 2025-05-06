import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MujeresvictimasPage } from './mujeresvictimas.page';

const routes: Routes = [
  {
    path: '',
    component: MujeresvictimasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MujeresvictimasPageRoutingModule {}
