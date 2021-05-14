import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";

export class ValidatorHelper
{
	static password(passwordControlName: string, confirmControlName: string): ValidatorFn
	{
		return ((formGroup: FormGroup) => {
			const passwordControl: FormControl = <FormControl>formGroup.get(passwordControlName);
			const confirmControl: FormControl  = <FormControl>formGroup.get(confirmControlName);

			if (passwordControl.value !== confirmControl.value)
			{
				return {
					password: {
						password: passwordControl.value,
						confirm:  confirmControl.value
					}
				};
			}


			return null;
		});
	}
}
