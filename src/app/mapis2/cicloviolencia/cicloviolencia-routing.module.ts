import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloviolenciaPage } from './cicloviolencia.page';

const routes: Routes = [
  {
    path: '',
    component: CicloviolenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CicloviolenciaPageRoutingModule {}
