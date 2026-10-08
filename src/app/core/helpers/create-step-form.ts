import { FormControl, FormGroup } from '@angular/forms';
import { DynamicFieldConfig } from '../models/dynamic-form-field.model';

export function createStepForm(fields: DynamicFieldConfig[]): FormGroup {
  const form = new FormGroup({});

  for (const field of fields) {
    const control = new FormControl(
      { value: field.initialValue ?? '', disabled: !!field.disabled },
      field.validators ?? [],
    );
    form.addControl(field.formControlName, control);
  }

  return form;
}
