import { Component, OnInit } from '@angular/core';
import { FadeInInterface, FadeIn } from '../core/animations/list/fadein';
import { AnimationState } from '../core/animations/config/animation.state';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  animations: [
    FadeIn
  ]
})
export class AngularComponent implements OnInit, FadeInInterface {
  fadeInState = AnimationState.stop;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.fadeInState = AnimationState.start);
  }

}
