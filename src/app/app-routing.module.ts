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
  {
    path: 'game',
    loadChildren: () => import('./pages/partie/game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'score',
    loadChildren: () => import('./pages/partie/score/score.module').then( m => m.ScorePageModule)
  },
  {
    path: 'rejoindre',
    loadChildren: () => import('./pages/partie/rejoindre/rejoindre.module').then( m => m.RejoindrePageModule)
  },
  {
    path: 'leve-choice',
    loadChildren: () => import('./pages/partie/leve-choice/leve-choice.module').then( m => m.LeveChoicePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
