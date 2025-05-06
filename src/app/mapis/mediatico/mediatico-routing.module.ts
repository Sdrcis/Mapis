import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaticoPage } from './mediatico.page';

const routes: Routes = [
  {
    path: '',
    component: MediaticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaticoPageRoutingModule {}
