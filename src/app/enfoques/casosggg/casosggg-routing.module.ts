import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosgggPage } from './casosggg.page';

const routes: Routes = [
  {
    path: '',
    component: CasosgggPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosgggPageRoutingModule {}
