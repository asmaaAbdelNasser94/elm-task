import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HomeAboutComponent } from '../home-about/home-about.component';
import { HomeHeroComponent } from '../home-hero/home-hero.component';
import { HomeNewsComponent } from '../home-news/home-news.component';
import { HomePartnersComponent } from '../home-partners/home-partners.component';
import { HomeServicesComponent } from '../home-services/home-services.component';

@Component({
  selector: 'elm-home-page-container',
  imports: [HomeHeroComponent, HomeAboutComponent, HomeServicesComponent, HomeNewsComponent, HomePartnersComponent, TranslatePipe],
  templateUrl: './home-page-container.component.html',
  styleUrl: './home-page-container.component.scss',
})
export class HomePageContainerComponent {}
