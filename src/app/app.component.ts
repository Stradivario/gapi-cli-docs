import { Component, Inject } from '@angular/core';
import { ResponsiveProvider } from './core/responsive.provider';
import { GapiApolloService } from 'gapi-angular-client';
import { IQuery, ISubscription, IMutation } from './core/api-introspection';
import { Subscription } from 'rxjs/Subscription';
import { GAPI_APOLLO_MODULE_CONFIG, GapiApolloClientOptions } from 'gapi-angular-client';
import { DOCUMENTS } from './core/api-introspection/documents';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  cols = 2;
  subscription: Subscription;
  constructor(
    public responsive: ResponsiveProvider,
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private gapiApolloService: GapiApolloService
  ) {

    this.gapiApolloService.setGraphqlDocuments(DOCUMENTS);
    // tslint:disable-next-line:max-line-length
    this.gapiApolloService.setAuthorizationToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtyaXN0aXFuLnRhY2hldkBnbWFpbC5jb20iLCJpZCI6MSwic2NvcGUiOlsiQURNSU4iXSwiaWF0IjoxNTIwMjkxMzkyfQ.9hpIDPkSiGvjTmUEyg_R_izW-ra2RzzLbe3Uh3IFsZg');

    this.gapiApolloService.init();

    this.responsive.width$.subscribe((width) => {
      if (width < 600) {
        this.cols = 1;
      } else {
        this.cols = 2;
      }
    });

    // this.subscription = this.subscribe().subscribe();
    // this.query().subscribe();
    // this.mutation().subscribe();

    // setTimeout(() => {
    //   if (this.subscription) {
    //     this.subscription.unsubscribe();
    //   }
    //   this.logout();
    // }, 10000);
  }

  query() {
    return this.gapiApolloService
      .query<IQuery>('findUser.query.graphql', {
        id: 1
      })
      .map(res => res.data.findUser);
  }

  mutation() {
    return this.gapiApolloService
      .mutation<IMutation>('publishSignal.mutation.graphql', {
        message: 'Hello world',
        signal: 'CREATE_SIGNAL_BASIC'
      })
      .map(res => res.data.publishSignal);
  }

  subscribe() {
    return this.gapiApolloService
      .subscription<ISubscription>('subscribeToUserMessagesBasic.subscription.graphql')
      .map((res) => res.data.subscribeToUserMessagesBasic);
  }
  goToUrl(url: string): void {
    this.document.location.href = url;
  }
  navigate(url) {
    this.router.navigate([url]);
  }
  async logout() {
    await this.gapiApolloService.resetStore();
    // All store settings are set to default state
  }
}
