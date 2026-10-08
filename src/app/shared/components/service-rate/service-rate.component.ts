import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { Panel } from 'primeng/panel';
import { Rating } from 'primeng/rating';
import { Textarea } from 'primeng/textarea';

@Component({
  selector: 'elm-service-rate',
  imports: [FormsModule, TranslatePipe, Button, Panel, Rating, Textarea],
  templateUrl: './service-rate.component.html',
  styleUrl: './service-rate.component.scss',
})
export class ServiceRateComponent {
  readonly average = input(3.9);
  readonly reviewCount = input(1544);

  protected collapsed = true;
  protected score: number | null = null;
  protected feedback = '';

  protected get averageLabel(): string {
    return this.average().toFixed(1);
  }

  protected get displayScore(): number {
    return Math.round(this.average());
  }

  protected open(): void {
    this.collapsed = false;
  }

  protected close(event: Event): void {
    event.stopPropagation();
    this.collapsed = true;
  }
}
