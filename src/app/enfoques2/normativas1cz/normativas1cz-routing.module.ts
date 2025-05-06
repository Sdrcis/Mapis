import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativas1czPage } from './normativas1cz.page';

const routes: Routes = [
  {
    path: '',
    component: Normativas1czPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativas1czPageRoutingModule {}
