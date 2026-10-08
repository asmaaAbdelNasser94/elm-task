import { Component, inject } from '@angular/core';
import { PageInfoService } from '../../../../shared/services/page-info.service';
import { HomePageContainerComponent } from '../../components/home-page-container/home-page-container.component';

@Component({
  selector: 'elm-home-page',
  imports: [HomePageContainerComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  private readonly pageInfo = inject(PageInfoService);

  constructor() {
    this.pageInfo.pageInfo = {
      title: '_Home.title',
      breadcrumb: [],
    };
  }
}
