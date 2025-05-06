import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineamientosespecPage } from './lineamientosespec.page';

const routes: Routes = [
  {
    path: '',
    component: LineamientosespecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineamientosespecPageRoutingModule {}
