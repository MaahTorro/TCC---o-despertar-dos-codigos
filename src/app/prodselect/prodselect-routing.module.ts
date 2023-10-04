import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdselectPage } from './prodselect.page';

const routes: Routes = [
  {
    path: '',
    component: ProdselectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdselectPageRoutingModule {}
