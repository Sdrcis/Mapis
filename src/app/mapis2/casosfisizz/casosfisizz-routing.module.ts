import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosfisizzPage } from './casosfisizz.page';

const routes: Routes = [
  {
    path: '',
    component: CasosfisizzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosfisizzPageRoutingModule {}
