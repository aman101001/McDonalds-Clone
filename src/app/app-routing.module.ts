import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { AboutComponent } from './feature/about/about.component';
import { GiftCardComponent } from './feature/gift-card/gift-card.component';

const routes: Routes = [
  // { path: '',loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path:'',component:HomeComponent},
  { path: 'about',component:AboutComponent,loadChildren: () => import('./feature/about/about.module').then(m => m.AboutModule) },
  { path: 'gift-cards',component:GiftCardComponent,loadChildren: () => import('./feature/gift-card/gift-card.module').then(m => m.GiftCardModule) },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
