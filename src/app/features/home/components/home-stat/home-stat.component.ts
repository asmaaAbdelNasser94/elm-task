import { afterNextRender, Component, ElementRef, input, viewChild } from '@angular/core';
import { CountUp } from 'countup.js';

@Component({
  selector: 'elm-home-stat',
  templateUrl: './home-stat.component.html',
  styleUrl: './home-stat.component.scss',
})
export class HomeStatComponent {
  readonly icon = input.required<string>();
  readonly value = input.required<number>();
  readonly label = input.required<string>();

  private readonly valueEl = viewChild.required<ElementRef<HTMLElement>>('valueEl');

  constructor() {
    afterNextRender(() => {
      const countUp = new CountUp(this.valueEl().nativeElement, this.value(), {
        duration: 3,
        decimalPlaces: 1,
        suffix: 'M',
      });

      if (!countUp.error) {
        countUp.start();
      }
    });
  }
}
