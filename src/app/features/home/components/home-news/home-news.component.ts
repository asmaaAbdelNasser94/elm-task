import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Carousel } from 'primeng/carousel';
import { NewsCard } from '../../models/news-card.model';

@Component({
  selector: 'elm-home-news',
  imports: [TranslatePipe, Button, Card, Carousel],
  templateUrl: './home-news.component.html',
  styleUrl: './home-news.component.scss',
})
export class HomeNewsComponent {
  private readonly destroyRef = inject(DestroyRef);

  /** One card until the browser is wide enough for the three-card row. */
  protected readonly numVisible = signal(1);

  constructor() {
    afterNextRender(() => {
      const desktop = window.matchMedia('(min-width: 1024px)');
      const apply = () => this.numVisible.set(desktop.matches ? 3 : 1);
      apply();
      desktop.addEventListener('change', apply);
      this.destroyRef.onDestroy(() => desktop.removeEventListener('change', apply));
    });
  }

  protected readonly cards: NewsCard[] = Array.from({ length: 3 }, (_, id) => ({
    id,
    image: '/images/saudi-flag.png',
    titleKey: '_Home.news.card.title',
    descriptionKey: '_Home.news.card.description',
    actionKey: '_Home.news.card.action',
  }));
}
