import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { StartServiceService } from '../../services/start-service.service';

@Component({
  selector: 'elm-start-service-page-container',
  imports: [TranslatePipe],
  templateUrl: './start-service-page-container.component.html',
  styleUrl: './start-service-page-container.component.scss',
})
export class StartServicePageContainerComponent {
  protected readonly startService = inject(StartServiceService);
}
