import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink3Page } from './otrolink3.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink3PageRoutingModule {}
