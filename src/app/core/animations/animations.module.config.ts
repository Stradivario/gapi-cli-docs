import {InjectionToken} from '@angular/core';
import {AnimationsModuleConfigInterface} from './config/config.interface';
import {FadeOut} from './list/fadeout';
import {FadeIn} from './list/fadein';
import { ScrollAnimation } from './list/scrollAnimation';

export const ANIMATIONS_MODULE_DI_CONFIG: AnimationsModuleConfigInterface = {
  animations: [FadeIn, FadeOut, ScrollAnimation]
};

export let ANIMATIONS_MODULE_CONFIG = new InjectionToken< AnimationsModuleConfigInterface >( 'app.config' );
