import { Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FieldType } from '../../../../../core/enums/dynamic-form-field.enum';
import { DynamicFieldConfig } from '../../../../../core/models/dynamic-form-field.model';

export function thirdStepFormList(_TranslateService: TranslateService): DynamicFieldConfig[] {
  return [
    {
      formControlName: 'thirdRequired',
      label: _TranslateService.instant('_StartService.form.requiredLabel'),
      type: FieldType.TEXT,
      placeholder: _TranslateService.instant('_StartService.form.placeholder'),
      required: true,
      validators: [Validators.required],
    },
    {
      formControlName: 'thirdOptional',
      label: _TranslateService.instant('_StartService.form.optionalLabel'),
      type: FieldType.TEXT,
      placeholder: _TranslateService.instant('_StartService.form.placeholder'),
      required: false,
    },
  ];
}
