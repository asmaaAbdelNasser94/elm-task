import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, Injectable, PLATFORM_ID, REQUEST, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLang = 'ar' | 'en';

const LANG_STORAGE_KEY = 'elm-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly request = inject(REQUEST, { optional: true });

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
    this.persist(lang);
  }

  private storedLang(): AppLang | null {
    if (isPlatformBrowser(this.platformId)) {
      return this.toLang(localStorage.getItem(LANG_STORAGE_KEY));
    }

    return this.toLang(this.cookie(LANG_STORAGE_KEY));
  }

  private persist(lang: AppLang): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(LANG_STORAGE_KEY, lang);
    this.document.cookie = `${LANG_STORAGE_KEY}=${lang};path=/;max-age=31536000;samesite=lax`;
  }

  private cookie(name: string): string | null {
    const header = this.request?.headers.get('cookie');
    if (!header) {
      return null;
    }

    const prefix = `${name}=`;
    const pair = header
      .split(';')
      .map((part) => part.trim())
      .find((part) => part.startsWith(prefix));

    return pair ? decodeURIComponent(pair.slice(prefix.length)) : null;
  }

  private toLang(value: string | null): AppLang | null {
    return value === 'ar' || value === 'en' ? value : null;
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
