import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink21Page } from './otrolink21.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink21PageRoutingModule {}
