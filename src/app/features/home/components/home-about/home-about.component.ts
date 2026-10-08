import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { HomeStatComponent } from '../home-stat/home-stat.component';

@Component({
  selector: 'elm-home-about',
  imports: [TranslatePipe, HomeStatComponent, Button],
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.scss',
})
export class HomeAboutComponent {
  protected readonly stats = [
    { icon: 'give-blood', value: 1.5 },
    { icon: 'star', value: 1.5 },
    { icon: 'plus', value: 1.5 },
    { icon: 'user-group', value: 1.5 },
  ];
}
