import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosgbPage } from './casosgb.page';

const routes: Routes = [
  {
    path: '',
    component: CasosgbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosgbPageRoutingModule {}
