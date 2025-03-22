import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? { passwordStrength: true } : null;
  };
}

export function passwordHasNumericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
  
      if (!value) {
        return { hasNumeric: true };
      }
      const hasNumeric = /[0-9]+/.test(value);

      return !hasNumeric ? { hasNumeric: true } : null;
    }
}
export function passwordHasAlphabetValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
  
      if (!value) {
        return { hasAlphabet: true };
      }
      const hasAlphabet = /[A-Za-z]+/.test(value);

      return !hasAlphabet ? { hasAlphabet: true } : null;
    }
}

    export function passwordMinlengthValidator(minLength:number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
          const value = control.value;
      
          if (!value) {
            return { minLength: true };
          }
          const hasNumeric = /[0-9]+/.test(value);
   
          return value.length<minLength ? { minLength: true } : null;
        }
    
    }


