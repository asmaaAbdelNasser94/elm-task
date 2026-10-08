import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ActionsService } from '../../services/actions.service';

@Component({
  selector: 'elm-actions-page-container',
  imports: [TranslatePipe],
  templateUrl: './actions-page-container.component.html',
  styleUrl: './actions-page-container.component.scss',
})
export class ActionsPageContainerComponent {
  protected readonly actionsService = inject(ActionsService);
}
