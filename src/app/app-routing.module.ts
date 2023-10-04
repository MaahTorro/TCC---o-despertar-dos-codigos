import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastroprod',
    loadChildren: () => import('./cadastroprod/cadastroprod.module').then( m => m.CadastroprodPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'listaprod',
    loadChildren: () => import('./listaprod/listaprod.module').then( m => m.ListaprodPageModule)
  },
  {
    path: 'lembretes',
    loadChildren: () => import('./lembretes/lembretes.module').then( m => m.LembretesPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'estatisticas',
    loadChildren: () => import('./estatisticas/estatisticas.module').then( m => m.EstatisticasPageModule)
  },
  {
    path: 'estatisticas',
    loadChildren: () => import('./estatisticas/estatisticas.module').then( m => m.EstatisticasPageModule)
  },
  {
    path: 'editarprod',
    loadChildren: () => import('./editarprod/editarprod.module').then( m => m.EditarprodPageModule)
  },
  {
    path: 'prodselect',
    loadChildren: () => import('./prodselect/prodselect.module').then( m => m.ProdselectPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
