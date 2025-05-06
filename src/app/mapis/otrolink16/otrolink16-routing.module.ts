import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otrolink16Page } from './otrolink16.page';

const routes: Routes = [
  {
    path: '',
    component: Otrolink16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otrolink16PageRoutingModule {}
