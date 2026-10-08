import { DOCUMENT, Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLang = 'ar' | 'en';

const LANG_STORAGE_KEY = 'elm-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);

  readonly currentLang = this.translate.currentLang;
  readonly languages: readonly AppLang[] = ['ar', 'en'];

  init(): void {
    this.use(this.storedLang() ?? 'ar');
  }

  use(lang: AppLang): void {
    this.translate.use(lang);
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    const root = this.document.documentElement;
    root.lang = lang;
    root.dir = direction;
    this.setBootstrapStylesheet(direction);
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  }

  private storedLang(): AppLang | null {
    const value = localStorage.getItem(LANG_STORAGE_KEY);
    return value === 'ar' || value === 'en' ? value : null;
  }

  private setBootstrapStylesheet(direction: 'rtl' | 'ltr'): void {
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
