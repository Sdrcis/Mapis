import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pregmenu2Page } from './pregmenu2.page';

const routes: Routes = [
  {
    path: '',
    component: Pregmenu2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pregmenu2PageRoutingModule {}
