import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { PageInfo } from '../../core/types/page-info.type';

@Injectable({ providedIn: 'root' })
export class PageInfoService {
  private readonly documentTitle = inject(Title);
  private readonly translate = inject(TranslateService);

  readonly _pageInfo$ = new BehaviorSubject<PageInfo>({ title: '', icon: '', breadcrumb: [] });

  constructor() {
    this.translate.onLangChange.subscribe(() => this.applyTitle());
  }

  get pageInfo(): PageInfo {
    return this._pageInfo$.value;
  }

  set pageInfo(value: PageInfo) {
    this._pageInfo$.next(value);
    this.applyTitle();
  }

  private applyTitle(): void {
    const key = this.pageInfo.title;
    if (!key) {
      return;
    }

    this.translate.get(key).subscribe((label) => {
      if (this.pageInfo.title === key) {
        this.documentTitle.setTitle(label);
      }
    });
  }
}
