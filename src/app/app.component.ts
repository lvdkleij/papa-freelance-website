import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AtlasHeaderComponent } from '../libs/components/header/header.component'

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet],
   template: '<router-outlet></router-outlet>',
})
export class AppComponent {}
