import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink7Page } from './otrolink7.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink7PageRoutingModule {}
