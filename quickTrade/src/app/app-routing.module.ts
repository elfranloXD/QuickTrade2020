import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
      path: 'details/:id/:nombre/:descripcion/:categoria/:precio/:cocheMoto/:anyo/:nKm/:estadoProducto/:localidad/:nHabitaciones',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'insert-product',
    loadChildren: () => import('./insert-product/insert-product.module').then( m => m.InsertProductPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
