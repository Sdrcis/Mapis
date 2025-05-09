import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpcListPageRoutingModule } from './upc-list-routing.module';

import { UpcListPage } from './upc-list.page';

const routes: Routes = [
  {
    path: '',
    component: UpcListPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    IonicModule,
    UpcListPageRoutingModule
  ],
  exports: [RouterModule],
  declarations: [UpcListPage]
})


export class UpcListPageModule {}
