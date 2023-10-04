import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdselectPageRoutingModule } from './prodselect-routing.module';

import { ProdselectPage } from './prodselect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdselectPageRoutingModule
  ],
  declarations: [ProdselectPage]
})
export class ProdselectPageModule {}
