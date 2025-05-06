import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink24Page } from './otrolink24.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink24PageRoutingModule {}
