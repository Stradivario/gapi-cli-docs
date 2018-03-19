import { trigger, state, animate, transition, style, AnimationTriggerMetadata} from '@angular/animations';

export const FadeOut: AnimationTriggerMetadata = trigger('fadeOut', [
  state('0' , style({ opacity: 1 })),
  state('1', style({ opacity: 0 })),
  transition('1 => 0', animate('600ms')),
  transition('0 => 1', animate('300ms')),
]);

export class FadeOutInterface {
  fadeOutVisibility = 0;
}
