import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { MultiSelect } from 'primeng/multiselect';
import { Select } from 'primeng/select';
import { Textarea } from 'primeng/textarea';
import { FieldType } from '../../../core/enums/dynamic-form-field.enum';
import { DynamicFieldConfig } from '../../../core/models/dynamic-form-field.model';

@Component({
  selector: 'elm-dynamic-form-field',
  imports: [
    NgTemplateOutlet,
    ReactiveFormsModule,
    InputText,
    Textarea,
    Select,
    MultiSelect,
    DatePicker,
    IconField,
    InputIcon,
  ],
  templateUrl: './dynamic-form-field.component.html',
  styleUrl: './dynamic-form-field.component.scss',
})
export class DynamicFormFieldComponent {
  readonly field = input.required<DynamicFieldConfig>();
  readonly form = input.required<FormGroup>();
  protected readonly fieldType = FieldType;

  protected invalid(): boolean {
    const control = this.form().get(this.field().formControlName);
    return !!control && control.invalid && (control.touched || control.dirty);
  }
}
