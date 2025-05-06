import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmbitoPage } from './ambito.page';

const routes: Routes = [
  {
    path: '',
    component: AmbitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmbitoPageRoutingModule {}
