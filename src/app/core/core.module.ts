import { NgModule } from '@angular/core';
import { ResponsiveProvider } from './responsive.provider';
import { GapiApolloModule } from 'gapi-angular-client';

const uri = 'localhost:9000';

@NgModule({
    imports: [
        GapiApolloModule.forRoot({
            uri: `http://${uri}/graphql`,
            subscriptionsUri: `ws://${uri}/subscriptions`,
        })
    ],
    providers: [
        ResponsiveProvider
    ]
})
export class CoreModule {}
