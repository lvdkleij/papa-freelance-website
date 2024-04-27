import { trigger, state, style, animate, transition } from '@angular/animations'

export const shouldFloatTrigger = trigger('shouldFloat', [
   state(
      'true',
      style({
         left: '10%',
         right: '10%',
         top: '1rem',
         backgroundColor: 'white',
         borderRadius: '24px',
         padding: '0 40px',
         margin: '0 auto',
         boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      })
   ),
   transition('* <=> *', [animate('0.25s')]),
])
