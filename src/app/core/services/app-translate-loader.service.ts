import { HttpClient } from '@angular/common/http';
import { Injectable, REQUEST, inject } from '@angular/core';
import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppTranslateLoader implements TranslateLoader {
  private readonly http = inject(HttpClient);
  private readonly request = inject(REQUEST, { optional: true });

  getTranslation(lang: string): Observable<TranslationObject> {
    const origin = this.request?.url ? new URL(this.request.url).origin : '';
    return this.http.get<TranslationObject>(`${origin}/i18n/${lang}.json`);
  }
}
