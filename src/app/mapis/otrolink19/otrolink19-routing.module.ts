import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink19Page } from './otrolink19.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink19PageRoutingModule {}
