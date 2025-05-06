import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pregmenu222Page } from './pregmenu222.page';

const routes: Routes = [
  {
    path: '',
    component: Pregmenu222Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pregmenu222PageRoutingModule {}
