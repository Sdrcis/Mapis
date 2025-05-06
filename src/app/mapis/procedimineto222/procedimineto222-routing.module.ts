import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Procedimineto222Page } from './procedimineto222.page';

const routes: Routes = [
  {
    path: '',
    component: Procedimineto222Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Procedimineto222PageRoutingModule {}
