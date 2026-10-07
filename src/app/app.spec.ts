import { TestBed } from '@angular/core/testing';
import { provideTranslateLoader, provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { App } from './app';

class TestTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<Record<string, unknown>> {
    return of({
      language: { label: 'اللغة', ar: 'العربية', en: 'English' },
      setup: {
        eyebrow: 'إعداد المشروع',
        title: 'بوابة علم',
        description: 'وصف',
        primaryAction: 'إجراء رئيسي',
        bootstrapButton: 'زر Bootstrap',
      },
    });
  }
}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideTranslateService({
          fallbackLang: 'ar',
          lang: 'ar',
          loader: provideTranslateLoader(TestTranslateLoader),
        }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the Arabic title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('بوابة علم');
  });
});
