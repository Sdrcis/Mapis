import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas2bPage } from './normativas2b.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas2bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas2bPageRoutingModule {}
