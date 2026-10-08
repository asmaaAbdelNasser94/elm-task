import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Avatar } from 'primeng/avatar';
import { Button, ButtonSeverity } from 'primeng/button';
import { Card } from 'primeng/card';
import { Carousel, CarouselResponsiveOptions } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { ServiceCard } from './model/service-card';

@Component({
  selector: 'elm-service-section',
  imports: [TranslatePipe, Avatar, Button, Card, Carousel, Tag],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.scss',
})
export class ServiceSectionComponent {
  private readonly router = inject(Router);

  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly actionLabel = input.required<string>();
  readonly items = input.required<ServiceCard[]>();
  readonly showNavigators = input(true);
  readonly variant = input<'muted' | 'brand'>('muted');
  readonly textBtn = input(false);
  readonly actionSeverity = input<ButtonSeverity>('secondary');
  readonly outlined = input(true);

  protected openService(id: number): void {
    this.router.navigate(['/services', id]);
  }

  protected readonly responsiveOptions: CarouselResponsiveOptions[] = [
    { breakpoint: '1023px', numVisible: 2, numScroll: 1 },
    { breakpoint: '639px', numVisible: 1, numScroll: 1 },
  ];
}
