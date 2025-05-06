import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink27Page } from './otrolink27.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink27PageRoutingModule {}
