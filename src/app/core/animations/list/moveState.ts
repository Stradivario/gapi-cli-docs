
import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

export const MoveState = trigger('moveState', [
    state('moveUp', style({
        transform: 'translateY(-30px)'
    })),
    state('1', style({
        transform: 'translateY(30px)'
    })),
    state('0', style({
        transform: 'translateY(0)'
    })),
    transition('* => moveUp', animate('100ms ease-in')),
    transition('* => moveDown', animate('100ms ease-out')),
    transition('* => static', animate('0ms linear'))
]);



export class MoveStateInterface {
    MoveStateState = 0;
}
