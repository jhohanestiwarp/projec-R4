import { Component } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false, showError: true },
    },
  ],
})
export class UserRegistrationComponent {
  readonly PAGE_CONTENT = {
    tab1: 'Roles y funciones',
    tab2: 'Formulario registro de usuarios',
  };

  constructor() {}

}
