import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { provideTranslateLoader, provideTranslateService, TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { App } from './app';
import { routes } from './app.routes';

class TestTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      language: { label: 'اللغة', ar: 'العربية', en: 'English' },
      header: {
        label: 'رأس الصفحة',
        home: 'الصفحة الرئيسية',
        nav: 'التنقل الرئيسي',
        search: 'بحث',
        login: 'تسجيل الدخول',
        menu: 'القائمة',
        language: { ar: 'العربية', en: 'English' },
        menuItems: {
          1: 'تبويب 1',
          2: 'تبويب 2',
          3: 'تبويب 3',
          4: 'تبويب 4',
          5: 'تبويب 5',
          6: 'تبويب 6',
          7: 'تبويب 7',
        },
      },
    });
  }
}

describe('App', () => {
  beforeEach(async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
      }),
    });

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter(routes),
        provideTranslateService({
          fallbackLang: 'ar',
          lang: 'ar',
          loader: provideTranslateLoader(() => new TestTranslateLoader()),
        }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the header navigation', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await TestBed.inject(Router).navigateByUrl('/');
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('elm-header')).toBeTruthy();
    expect(compiled.querySelector('p-menubar')?.textContent).toContain('تبويب 1');
  });
});
