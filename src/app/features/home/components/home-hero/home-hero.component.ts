import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Carousel } from 'primeng/carousel';
import { Button } from 'primeng/button';

@Component({
  selector: 'elm-home-hero',
  imports: [Carousel, TranslatePipe, Button],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss',
})
export class HomeHeroComponent {
  protected readonly slides = [0, 1, 2, 3];
}
