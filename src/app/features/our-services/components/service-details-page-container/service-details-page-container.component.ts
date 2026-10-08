import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { PageRateComponent } from '../../../../shared/components/page-rate/page-rate.component';
import { ServiceRateComponent } from '../../../../shared/components/service-rate/service-rate.component';
import { ServiceCard, serviceTagSeverities } from '../../../../shared/components/service-section/model/service-card';
import { ServiceSectionComponent } from '../../../../shared/components/service-section/service-section.component';
import { ServiceDetailsAsideComponent } from '../service-details-aside/service-details-aside.component';
import { ServiceDetailsTabsComponent } from '../service-details-tabs/service-details-tabs.component';
import { serviceDetailBreadcrumb, serviceDetailTags } from '../../data/service-details.items';

@Component({
  selector: 'elm-service-details-page-container',
  imports: [
    TranslatePipe,
    Button,
    Tag,
    BreadcrumbComponent,
    ServiceSectionComponent,
    ServiceDetailsTabsComponent,
    ServiceDetailsAsideComponent,
    ServiceRateComponent,
    PageRateComponent,
  ],
  templateUrl: './service-details-page-container.component.html',
  styleUrl: './service-details-page-container.component.scss',
})
export class ServiceDetailsPageContainerComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  protected readonly breadcrumb = serviceDetailBreadcrumb;
  protected readonly tags = serviceDetailTags;
  protected readonly relatedServices: ServiceCard[] = Array.from({ length: 8 }, (_, id) => ({
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

  protected startService(): void {
    const id = this.route.snapshot.paramMap.get('id');
    void this.router.navigate(['/services/start-service'], {
      queryParams: id ? { serviceId: id } : undefined,
    });
  }
}
