import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Button } from 'primeng/button';
import { Step, StepList, Stepper } from 'primeng/stepper';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { PageRateComponent } from '../../../../shared/components/page-rate/page-rate.component';
import { startServiceSteps } from '../../data/start-service.form';
import { FirstStepFormComponent } from '../start-service-forms/first-step-form/first-step-form.component';
import { SecondStepFormComponent } from '../start-service-forms/second-step-form/second-step-form.component';
import { ThirdStepFormComponent } from '../start-service-forms/third-step-form/third-step-form.component';

@Component({
  selector: 'elm-start-service-page-container',
  imports: [
    TranslatePipe,
    Button,
    Stepper,
    StepList,
    Step,
    BreadcrumbComponent,
    PageRateComponent,
    FirstStepFormComponent,
    SecondStepFormComponent,
    ThirdStepFormComponent,
  ],
  templateUrl: './start-service-page-container.component.html',
  styleUrl: './start-service-page-container.component.scss',
})
export class StartServicePageContainerComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly serviceId = this.route.snapshot.queryParamMap.get('serviceId') ?? '0';

  protected readonly breadcrumb: MenuItem[] = [
    { label: '_Layout.header.home', routerLink: '/home' },
    { label: '_Services.details.title', routerLink: ['/services', this.serviceId] },
    { label: '_StartService.title' },
  ];
  protected readonly steps = startServiceSteps;
  protected readonly activeStep = signal(1);

  protected onStepChange(value: number | undefined): void {
    if (value != null) {
      this.activeStep.set(value);
    }
  }

  protected next(): void {
    const current = this.activeStep();
    if (current < this.steps.length) {
      this.activeStep.set(current + 1);
    }
  }

  protected back(): void {
    const current = this.activeStep();
    if (current > 1) {
      this.activeStep.set(current - 1);
    }
  }
}
