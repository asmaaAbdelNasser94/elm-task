import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ServiceCard, serviceTagSeverities } from '../../../../shared/components/service-section/model/service-card';
import { ServiceSectionComponent } from '../../../../shared/components/service-section/service-section.component';

@Component({
  selector: 'elm-home-services',
  imports: [ServiceSectionComponent, TranslatePipe],
  templateUrl: './home-services.component.html',
})
export class HomeServicesComponent {
  protected readonly items: ServiceCard[] = Array.from({ length: 8 }, (_, id) => ({
    id,
    titleKey: '_Services.card.title',
    descriptionKey: '_Services.card.description',
    tags: [0, 1, 2].map((index) => ({
      labelKey: '_Services.card.tag',
      severity: serviceTagSeverities[(id + index) % serviceTagSeverities.length],
    })),
    primaryActionKey: '_Services.card.primaryAction',
    secondaryActionKey: '_Services.card.secondaryAction',
  }));
}
