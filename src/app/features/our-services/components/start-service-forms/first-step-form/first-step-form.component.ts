import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { map, merge } from 'rxjs';
import { DynamicFormFieldComponent } from '../../../../../shared/components/dynamic-form-field/dynamic-form-field.component';
import { createStepForm } from '../../../../../core/helpers/create-step-form';
import { firstStepFormList } from './first-step-form-list';

@Component({
  selector: 'elm-first-step-form',
  imports: [ReactiveFormsModule, TranslatePipe, DynamicFormFieldComponent],
  templateUrl: './first-step-form.component.html',
  styleUrl: './first-step-form.component.scss',
})
export class FirstStepFormComponent {
  private readonly _TranslateService = inject(TranslateService);

  private readonly formRevision = toSignal(
    merge(this._TranslateService.onLangChange, this._TranslateService.onTranslationChange).pipe(
      map(() => Date.now()),
    ),
    { initialValue: 0 },
  );

  protected readonly fields = computed(() => {
    this.formRevision();
    return firstStepFormList(this._TranslateService);
  });

  protected readonly form: FormGroup = createStepForm(firstStepFormList(this._TranslateService));
}
