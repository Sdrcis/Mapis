import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casosgineco2zzPage } from './casosgineco2zz.page';

const routes: Routes = [
  {
    path: '',
    component: Casosgineco2zzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casosgineco2zzPageRoutingModule {}
