import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Divider } from 'primeng/divider';
import {
  serviceDetailApps,
  serviceDetailContacts,
  serviceDetailFacts,
  serviceDetailPayments,
} from '../../data/service-details.items';

@Component({
  selector: 'elm-service-details-aside',
  imports: [TranslatePipe, Button, Card, Divider],
  templateUrl: './service-details-aside.component.html',
  styleUrl: './service-details-aside.component.scss',
})
export class ServiceDetailsAsideComponent {
  protected readonly facts = serviceDetailFacts;
  protected readonly payments = serviceDetailPayments;
  protected readonly contacts = serviceDetailContacts;
  protected readonly apps = serviceDetailApps;
}
