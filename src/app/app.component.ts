import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AtlasHeaderComponent } from '../libs/components/header/header.component'

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet, AtlasHeaderComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
})
export class AppComponent {
   title = 'papa-freelance-website'
}
