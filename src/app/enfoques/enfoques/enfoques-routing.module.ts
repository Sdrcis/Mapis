import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnfoquesPage } from './enfoques.page';

const routes: Routes = [
  {
    path: '',
    component: EnfoquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnfoquesPageRoutingModule {}
