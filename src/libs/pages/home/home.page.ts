import { Component } from '@angular/core'
import { AtlasHeaderComponent } from '../../components/header/header.component'

@Component({
   selector: 'home-page',
   templateUrl: 'home.page.html',
   standalone: true,
   imports: [AtlasHeaderComponent],
})
export class HomePage {}
