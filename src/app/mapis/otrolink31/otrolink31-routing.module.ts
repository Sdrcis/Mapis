import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink31Page } from './otrolink31.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink31PageRoutingModule {}
