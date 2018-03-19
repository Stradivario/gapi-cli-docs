import { trigger, state, animate, transition, style, keyframes} from '@angular/animations';

export const ScaleFromMiddle =   trigger('scaleFromMiddle', [
  transition('void => *', [
    style({transform: 'scale(0)'}),
    animate(200)
  ]),
  transition('* => void', [
    animate(200, style({transform: 'scale(1)'}))
  ]),
]);

export class ScaleFromMiddleInterface {
  ScaleFromMiddleState = 0;
}
