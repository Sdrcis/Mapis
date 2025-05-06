import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ayuda3Page } from './ayuda3.page';

const routes: Routes = [
  {
    path: '',
    component: Ayuda3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ayuda3PageRoutingModule {}
