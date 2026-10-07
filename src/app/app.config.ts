import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideTranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { AppTranslateLoader } from './core/services/app-translate-loader.service';
import { elmPreset } from './theme/elm.preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideTranslateService({
      fallbackLang: 'ar',
      lang: 'ar',
      loader: provideTranslateLoader(AppTranslateLoader),
    }),
    providePrimeNG({
      theme: {
        preset: elmPreset,
        options: {
          darkModeSelector: 'none',
          cssLayer: {
            name: 'primeng',
            order: 'bootstrap, primeng',
          },
        },
      },
    }),
  ],
};
