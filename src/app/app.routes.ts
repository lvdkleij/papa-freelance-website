import { Routes } from '@angular/router'
import { HomePage } from '../libs/pages/home/home.page'
import { AboutMePage } from '../libs/pages/about-me/about-me.page'

export const routes: Routes = [
   { path: '', redirectTo: '/nl', pathMatch: 'full' },
   {
      path: 'nl',
      children: [
         { path: '', component: HomePage },
         { path: 'about-me', component: AboutMePage },
      ],
   },
]
