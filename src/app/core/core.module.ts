import { NgModule } from '@angular/core';
import { ResponsiveProvider } from './responsive.provider';
import { GapiApolloModule } from 'gapi-angular-client';

const uri = 'gapi-api-example.herokuapp.com';

@NgModule({
    imports: [
        GapiApolloModule.forRoot({
            uri: `https://${uri}/graphql`,
            subscriptionsUri: `wss://${uri}/subscriptions`,
        })
    ],
    providers: [
        ResponsiveProvider
    ]
})
export class CoreModule {}
