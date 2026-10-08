import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Carousel, CarouselResponsiveOptions } from 'primeng/carousel';
import { Partner } from '../../models/partne.model';

@Component({
  selector: 'elm-home-partners',
  imports: [TranslatePipe, Carousel],
  templateUrl: './home-partners.component.html',
  styleUrl: './home-partners.component.scss',
})
export class HomePartnersComponent {
  protected readonly responsiveOptions: CarouselResponsiveOptions[] = [
    { breakpoint: '1279px', numVisible: 6, numScroll: 1 },
    { breakpoint: '1023px', numVisible: 4, numScroll: 1 },
    { breakpoint: '767px', numVisible: 3, numScroll: 1 },
    { breakpoint: '639px', numVisible: 2, numScroll: 1 },
  ];

  protected readonly partners: Partner[] = Array.from({ length: 16 }, (_, id) => ({
    id,
    icon: 'palm_swords',
    labelKey: '_Home.partners.logo',
  }));
}
