import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AngularComponent } from './angular/angular.component';

@NgModule({
    imports: [
        RouterModule.forRoot(<Routes>[
            { path: '', component: MainComponent },
            { path: '*', redirectTo: 'main', pathMatch: 'full' },
            { path: 'angular', component: AngularComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
