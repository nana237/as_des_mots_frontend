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
    path: 'connexion',
    loadChildren: () => import('./pages/auth/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/auth/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/partie/accueil/accueil.module').then( m => m.AccueilPageModule)
  },  {
    path: 'footer',
    loadChildren: () => import('./pages/pl-part/footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'complete-info',
    loadChildren: () => import('./pages/auth/complete-info/complete-info.module').then( m => m.CompleteInfoPageModule)
  },
  {
    path: 'game-config',
    loadChildren: () => import('./pages/config/game-config/game-config.module').then( m => m.GameConfigPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
