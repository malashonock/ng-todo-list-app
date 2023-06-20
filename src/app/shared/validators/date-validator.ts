import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class DateValidator {
  private static IsValueDefined(value: any): boolean {
    if (value === null || value === undefined) {
      return false;
    }

    if (!(value instanceof Date)) {
      throw new Error('Control should be of date type');
    }

    return true;
  }

  static min(minDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!DateValidator.IsValueDefined(control.value)) {
        return null;
      }

      return control.value < minDate ? {
        minDate: {
          actualDate: control.value,
          minDate,
        },
      } : null;
    };
  }

  static max(maxDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!DateValidator.IsValueDefined(control.value)) {
        return null;
      }

      return control.value > maxDate ? {
        maxDate: {
          actualDate: control.value,
          maxDate,
        },
      } : null;
    };
  }

}
