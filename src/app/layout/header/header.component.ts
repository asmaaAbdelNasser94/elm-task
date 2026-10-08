import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Button } from 'primeng/button';
import { Drawer } from 'primeng/drawer';
import { Menubar } from 'primeng/menubar';
import { PanelMenu } from 'primeng/panelmenu';
import { map, merge } from 'rxjs';
import { AppLang, LanguageService } from '../../core/services/language.service';
import { HeaderMenuItems } from './header-menu.items';

@Component({
  selector: 'elm-header',
  imports: [Menubar, PanelMenu, Button, Drawer, TranslatePipe, RouterLink, NgTemplateOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly _LanguageService = inject(LanguageService);
  protected  readonly _TranslateService = inject(TranslateService);
  protected readonly _Router = inject(Router);

  protected menuOpen = signal(false);

  // recomputation of the menu items whenever the language changes or translations are updated.
  private readonly menuRevision = toSignal(
    merge(this._TranslateService.onLangChange, this._TranslateService.onTranslationChange).pipe(map(() => Date.now())),
    { initialValue: 0 },
  );

  protected readonly menuItems = computed<MenuItem[]>(() => {
    this.menuRevision();
    this._LanguageService.currentLang();

    return HeaderMenuItems(this._TranslateService, this._Router);
  });

  protected get drawerPosition(): 'left' | 'right' {
    return this._LanguageService.currentLang() === 'ar' ? 'left' : 'right';
  }

  protected toggleLanguage(): void {
    const next: AppLang = this._LanguageService.currentLang() === 'ar' ? 'en' : 'ar';
    this._LanguageService.use(next);
  }
}
