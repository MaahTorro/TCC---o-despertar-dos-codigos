import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarprodPageRoutingModule } from './editarprod-routing.module';

import { EditarprodPage } from './editarprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarprodPageRoutingModule
  ],
  declarations: [EditarprodPage]
})
export class EditarprodPageModule {}
