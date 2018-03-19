import { trigger, state, animate, transition, style} from '@angular/animations';

export const FadeIn = trigger('fadeIn', [
  state('0' , style({ opacity: 0 })),
  state('1', style({ opacity: 1 })),
  transition('0 => 1', animate('300ms')),
  transition('1 => 0', animate('300ms')),
]);

export class FadeInInterface {
  fadeInState = 0;
}
