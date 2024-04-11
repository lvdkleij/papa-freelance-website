import { Component, HostListener, Renderer2 } from '@angular/core'
import { shouldFloatTrigger } from './header.animations'

@Component({
   selector: 'atlas-header-component',
   standalone: true,
   templateUrl: 'header.component.html',
   styleUrl: 'header.component.scss',
   animations: [shouldFloatTrigger],
})
export class AtlasHeaderComponent {
   shouldFloat = false
   floatThreshold = 75

   constructor(private readonly renderer: Renderer2) {}

   @HostListener('window:scroll', ['$event.target']) onScrollEvent(
      $event: any
   ) {
      const scrollTop = $event.scrollingElement.scrollTop
      if (!this.shouldFloat && scrollTop >= this.floatThreshold) {
         this.shouldFloat = true
         console.log(`shouldFloat 1 = ${this.shouldFloat}`)
      } else if (this.shouldFloat && scrollTop < this.floatThreshold) {
         this.shouldFloat = false
         console.log(`shouldFloat 2 = ${this.shouldFloat}`)
      }
   }
}
