import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertProductPageRoutingModule } from './insert-product-routing.module';

import { InsertProductPage } from './insert-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertProductPageRoutingModule
  ],
  declarations: [InsertProductPage]
})
export class InsertProductPageModule {}
