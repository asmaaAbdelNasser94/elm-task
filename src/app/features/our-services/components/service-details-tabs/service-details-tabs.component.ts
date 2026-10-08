import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';
import {
  serviceDetailDocuments,
  serviceDetailSteps,
  serviceDetailTabs,
  serviceDetailTerms,
} from '../../data/service-details.items';

@Component({
  selector: 'elm-service-details-tabs',
  imports: [TranslatePipe, Tabs, TabList, Tab, TabPanels, TabPanel],
  templateUrl: './service-details-tabs.component.html',
  styleUrl: './service-details-tabs.component.scss',
})
export class ServiceDetailsTabsComponent {
  protected readonly tabs = serviceDetailTabs;
  protected readonly steps = serviceDetailSteps;
  protected readonly terms = serviceDetailTerms;
  protected readonly documents = serviceDetailDocuments;
  protected activeTab = 'steps';
}
