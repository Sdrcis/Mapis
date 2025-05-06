import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosdcPage } from './casosdc.page';

const routes: Routes = [
  {
    path: '',
    component: CasosdcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosdcPageRoutingModule {}
