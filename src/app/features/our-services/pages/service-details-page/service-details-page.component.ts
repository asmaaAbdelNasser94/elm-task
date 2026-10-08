import { Component, inject } from '@angular/core';
import { PageInfoService } from '../../../../shared/services/page-info.service';
import { ServiceDetailsPageContainerComponent } from '../../components/service-details-page-container/service-details-page-container.component';

@Component({
  selector: 'elm-service-details-page',
  imports: [ServiceDetailsPageContainerComponent],
  templateUrl: './service-details-page.component.html',
})
export class ServiceDetailsPageComponent {
  private readonly pageInfo = inject(PageInfoService);

  constructor() {
    this.pageInfo.pageInfo = {
      title: '_Services.details.title',
      breadcrumb: [],
    };
  }
}
