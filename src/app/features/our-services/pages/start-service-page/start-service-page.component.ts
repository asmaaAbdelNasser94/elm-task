import { Component, inject } from '@angular/core';
import { PageInfoService } from '../../../../shared/services/page-info.service';
import { StartServicePageContainerComponent } from '../../components/start-service-page-container/start-service-page-container.component';

@Component({
  selector: 'elm-start-service-page',
  imports: [StartServicePageContainerComponent],
  templateUrl: './start-service-page.component.html',
})
export class StartServicePageComponent {
  private readonly pageInfo = inject(PageInfoService);

  constructor() {
    this.pageInfo.pageInfo = {
      title: '_StartService.title',
      breadcrumb: [],
    };
  }
}
