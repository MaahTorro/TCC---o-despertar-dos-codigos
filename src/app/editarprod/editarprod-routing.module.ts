import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarprodPage } from './editarprod.page';

const routes: Routes = [
  {
    path: '',
    component: EditarprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarprodPageRoutingModule {}
