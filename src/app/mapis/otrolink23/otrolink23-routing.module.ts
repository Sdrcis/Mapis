import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink23Page } from './otrolink23.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink23PageRoutingModule {}
