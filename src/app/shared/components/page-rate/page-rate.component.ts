import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'elm-page-rate',
  imports: [TranslatePipe, Button],
  templateUrl: './page-rate.component.html',
  styleUrl: './page-rate.component.scss',
})
export class PageRateComponent {
  readonly yesPercent = input(60);
  readonly responseCount = input(2843);

  protected answer: 'yes' | 'no' | null = null;

  protected choose(value: 'yes' | 'no'): void {
    this.answer = value;
  }
}
