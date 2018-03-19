import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AnimationsProvider } from './animations.provider';
import { ANIMATIONS_MODULE_CONFIG, ANIMATIONS_MODULE_DI_CONFIG } from './animations.module.config';

@NgModule({
  providers: [
    { provide: ANIMATIONS_MODULE_CONFIG, useValue: ANIMATIONS_MODULE_DI_CONFIG },
    AnimationsProvider
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class AnimationsModule {
  constructor( @Optional() @SkipSelf() parentModule: AnimationsModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
