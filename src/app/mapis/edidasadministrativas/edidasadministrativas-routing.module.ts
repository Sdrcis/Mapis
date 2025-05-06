import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdidasadministrativasPage } from './edidasadministrativas.page';

const routes: Routes = [
  {
    path: '',
    component: EdidasadministrativasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdidasadministrativasPageRoutingModule {}
