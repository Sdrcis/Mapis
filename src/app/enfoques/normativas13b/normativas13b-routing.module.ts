import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas13bPage } from './normativas13b.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas13bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas13bPageRoutingModule {}
