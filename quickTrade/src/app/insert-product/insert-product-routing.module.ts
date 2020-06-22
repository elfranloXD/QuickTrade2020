import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertProductPage } from './insert-product.page';

const routes: Routes = [
  {
    path: '',
    component: InsertProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertProductPageRoutingModule {}
