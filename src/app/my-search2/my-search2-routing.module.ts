import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySearch2Page } from './my-search2.page';

const routes: Routes = [
  {
    path: '',
    component: MySearch2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySearch2PageRoutingModule {}
