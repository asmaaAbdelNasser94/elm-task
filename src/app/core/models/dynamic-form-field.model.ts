import { TemplateRef } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { FieldType } from '../enums/dynamic-form-field.enum';

export interface DynamicFieldConfig {
  formControlName: string;
  label?: string;
  type: FieldType;
  placeholder?: string;
  options?: unknown[];
  optionLabel?: string;
  optionValue?: string;
  template?: TemplateRef<unknown>;
  validators?: ValidatorFn[];
  initialValue?: unknown;
  disabled?: boolean;
  required?: boolean;
  icon?: string;
  hint?: string;
}
