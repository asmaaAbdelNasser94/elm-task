import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { footerGroups, footerSocials, footerTools, footerUtilityLinks } from './footer.items';

@Component({
  selector: 'elm-footer',
  imports: [TranslatePipe, Button],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly groups = footerGroups;
  protected readonly socials = footerSocials;
  protected readonly tools = footerTools;
  protected readonly utilityLinks = footerUtilityLinks;
}
