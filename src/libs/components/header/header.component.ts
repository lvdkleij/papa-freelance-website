import { Component, HostListener } from '@angular/core'
import { shouldFloatTrigger } from './header.animations'
import { RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
   selector: 'atlas-header-component',
   templateUrl: 'header.component.html',
   styleUrl: 'header.component.scss',
   standalone: true,
   imports: [RouterLink, CommonModule],
   animations: [shouldFloatTrigger],
})
export class AtlasHeaderComponent {
   shouldFloat = false
   floatThreshold = 48

   @HostListener('window:scroll', ['$event.target']) onScrollEvent(
      $event: any
   ) {
      const scrollTop = $event.scrollingElement.scrollTop
      if (!this.shouldFloat && scrollTop >= this.floatThreshold) {
         this.shouldFloat = true
      } else if (this.shouldFloat && scrollTop < this.floatThreshold) {
         this.shouldFloat = false
      }
   }
}
