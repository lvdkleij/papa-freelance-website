import { Component } from '@angular/core'
import { AtlasHeaderComponent } from '../../components/header/header.component'

@Component({
   selector: 'about-me-page',
   templateUrl: 'about-me.page.html',
   standalone: true,
   imports: [AtlasHeaderComponent],
})
export class AboutMePage {}
