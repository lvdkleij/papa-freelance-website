import { Component } from '@angular/core'
import { AtlasHeaderComponent } from '../../components/header/header.component'
import { AtlasAboveTheHeadComponent } from '../../components/above-the-head/above-the-head.component'

@Component({
   selector: 'home-page',
   templateUrl: 'home.page.html',
   standalone: true,
   imports: [AtlasHeaderComponent, AtlasAboveTheHeadComponent],
})
export class HomePage {}
