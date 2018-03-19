import { trigger, state, animate, transition, style, AnimationTriggerMetadata } from '@angular/animations';

export const ScrollAnimation: AnimationTriggerMetadata = trigger('scrollAnimation', [
    state('1', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    state('0', style({
        opacity: 0,
        transform: 'translateX(-100%)'
    })),
    transition('1 => 0', animate('700ms ease-out')),
    transition('0 => 1', animate('700ms ease-in'))
]);

export class ScrollAnimationInterface {
    scrollAnimationVisibility = 0;
}
