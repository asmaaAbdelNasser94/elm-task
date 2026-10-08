import { Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FieldType } from '../../../../../core/enums/dynamic-form-field.enum';
import { DynamicFieldConfig } from '../../../../../core/models/dynamic-form-field.model';

export function secondStepFormList(_TranslateService: TranslateService): DynamicFieldConfig[] {
  return [
    {
      formControlName: 'requiredText',
      label: _TranslateService.instant('_StartService.form.requiredLabel'),
      type: FieldType.TEXT,
      placeholder: _TranslateService.instant('_StartService.form.placeholder'),
      required: true,
      validators: [Validators.required],
    },
    {
      formControlName: 'optionalText',
      label: _TranslateService.instant('_StartService.form.optionalLabel'),
      type: FieldType.TEXT,
      placeholder: _TranslateService.instant('_StartService.form.placeholder'),
      required: false,
    },
    {
      formControlName: 'requiredSearch',
      label: _TranslateService.instant('_StartService.form.requiredLabel'),
      type: FieldType.TEXT,
      placeholder: _TranslateService.instant('_StartService.form.placeholder'),
      icon: 'search',
      required: true,
      validators: [Validators.required],
    },
    {
      formControlName: 'optionalSearch',
      label: _TranslateService.instant('_StartService.form.optionalLabel'),
      type: FieldType.TEXT,
      placeholder: _TranslateService.instant('_StartService.form.placeholder'),
      icon: 'search',
      required: false,
    },
    {
      formControlName: 'requiredHint',
      label: _TranslateService.instant('_StartService.form.requiredLabel'),
      type: FieldType.TEXT,
      placeholder: _TranslateService.instant('_StartService.form.placeholder'),
      hint: _TranslateService.instant('_StartService.form.hint'),
      required: true,
      validators: [Validators.required],
    },
    {
      formControlName: 'optionalHint',
      label: _TranslateService.instant('_StartService.form.optionalLabel'),
      type: FieldType.TEXT,
      placeholder: _TranslateService.instant('_StartService.form.placeholder'),
      hint: _TranslateService.instant('_StartService.form.hint'),
      required: false,
    },
    {
      formControlName: 'requiredError',
      label: _TranslateService.instant('_StartService.form.requiredLabel'),
      type: FieldType.TEXT,
      placeholder: _TranslateService.instant('_StartService.form.placeholder'),
      hint: _TranslateService.instant('_StartService.form.hint'),
      required: true,
      validators: [Validators.required],
    },
    {
      formControlName: 'optionalError',
      label: _TranslateService.instant('_StartService.form.optionalLabel'),
      type: FieldType.TEXT,
      placeholder: _TranslateService.instant('_StartService.form.placeholder'),
      hint: _TranslateService.instant('_StartService.form.hint'),
      required: false,
    },
    {
      formControlName: 'requiredPlain',
      label: _TranslateService.instant('_StartService.form.requiredLabel'),
      type: FieldType.TEXT,
      placeholder: _TranslateService.instant('_StartService.form.placeholder'),
      required: true,
      validators: [Validators.required],
    },
    {
      formControlName: 'optionalPlain',
      label: _TranslateService.instant('_StartService.form.optionalLabel'),
      type: FieldType.TEXT,
      placeholder: _TranslateService.instant('_StartService.form.placeholder'),
      required: false,
    },
  ];
}
