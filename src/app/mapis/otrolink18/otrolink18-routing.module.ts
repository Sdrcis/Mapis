import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink18Page } from './otrolink18.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink18PageRoutingModule {}
