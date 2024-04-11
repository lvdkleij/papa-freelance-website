import { trigger, state, style, animate, transition } from '@angular/animations'

export const shouldFloatTrigger = trigger('shouldFloat', [
   state(
      'true',
      style({
         left: '5rem',
         right: '5rem',
         top: '1rem',
         border: '1px solid black',
         borderRadius: '20px',
         padding: '0 40px',
      })
   ),
   state(
      'false',
      style({
         left: '0',
         right: '0',
      })
   ),
   transition('* <=> *', [animate('0.25s')]),
])
