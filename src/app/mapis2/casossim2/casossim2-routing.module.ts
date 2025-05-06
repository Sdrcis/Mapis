import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casossim2Page } from './casossim2.page';

const routes: Routes = [
  {
    path: '',
    component: Casossim2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casossim2PageRoutingModule {}
