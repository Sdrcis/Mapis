import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casossim2zzPage } from './casossim2zz.page';

const routes: Routes = [
  {
    path: '',
    component: Casossim2zzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casossim2zzPageRoutingModule {}
