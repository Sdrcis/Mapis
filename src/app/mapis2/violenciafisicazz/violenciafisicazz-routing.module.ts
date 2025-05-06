import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciafisicazzPage } from './violenciafisicazz.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciafisicazzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciafisicazzPageRoutingModule {}
