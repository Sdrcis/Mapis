import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosginecoPage } from './casosgineco.page';

const routes: Routes = [
  {
    path: '',
    component: CasosginecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosginecoPageRoutingModule {}
