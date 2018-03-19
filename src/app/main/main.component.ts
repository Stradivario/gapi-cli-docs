import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { ResponsiveProvider } from '../core/responsive.provider';
import { AnimationState } from '../core/animations/config/animation.state';
import { FadeInInterface, FadeIn } from '../core/animations/list/fadein';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    FadeIn
  ]
})
export class MainComponent implements OnInit, FadeInInterface {
  cols = 2;
  fadeInState = AnimationState.stop;
  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    public responsive: ResponsiveProvider,
  ) { }

  ngOnInit() {
    this.responsive.width$.subscribe((width) => {
      if (width < 600) {
        this.cols = 1;
      } else {
        this.cols = 2;
      }
    });
    setTimeout(() => this.fadeInState = AnimationState.start);
  }

  goToUrl(url: string): void {
    this.document.location.href = url;
  }
  navigate(url) {
    this.router.navigate([url]);
  }
}
