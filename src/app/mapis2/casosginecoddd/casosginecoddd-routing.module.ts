import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasosginecodddPage } from './casosginecoddd.page';

const routes: Routes = [
  {
    path: '',
    component: CasosginecodddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasosginecodddPageRoutingModule {}
