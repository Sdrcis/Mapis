import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink12Page } from './otrolink12.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink12PageRoutingModule {}
