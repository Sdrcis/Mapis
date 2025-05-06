import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Normativaap16Page } from './normativaap16.page';

const routes: Routes = [
  {
    path: '',
    component: Normativaap16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Normativaap16PageRoutingModule {}
