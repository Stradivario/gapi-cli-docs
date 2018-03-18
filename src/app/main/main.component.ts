import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { ResponsiveProvider } from '../core/responsive.provider';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cols = 2;
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
  }

  goToUrl(url: string): void {
    this.document.location.href = url;
  }
  navigate(url) {
    this.router.navigate([url]);
  }
}
