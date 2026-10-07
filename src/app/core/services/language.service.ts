import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLang = 'ar' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly currentLang = this.translate.currentLang;
  readonly languages: readonly AppLang[] = ['ar', 'en'];

  init(): void {
    this.use('ar');
  }

  use(lang: AppLang): void {
    this.translate.use(lang);
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    const root = this.document.documentElement;
    root.lang = lang;
    root.dir = direction;
    this.setBootstrapStylesheet(direction);
  }

  private setBootstrapStylesheet(direction: 'rtl' | 'ltr'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const link = this.document.getElementById('bootstrap-css');
    if (!(link instanceof HTMLLinkElement)) {
      return;
    }

    const file = direction === 'rtl' ? 'bootstrap.rtl.min.css' : 'bootstrap.min.css';
    if (!link.href.endsWith(file)) {
      link.href = `bootstrap/${file}`;
    }
  }
}
