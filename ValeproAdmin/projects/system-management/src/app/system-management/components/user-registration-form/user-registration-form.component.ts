import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { UserRegistrationResult } from '../../../interfaces/system-management.interface';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false, showError: true },
    },
  ],
})
export class UserRegistrationFormComponent {
  readonly PAGE_CONTENT = {
    title: 'Formulario registro de usuarios',
  };

  readonly oneFieldNames = [
    'Tipo de documento',
    'Número de identificación',
    'Primer nombre',
    'Segundo nombre',
    'Primer apellido',
    'Segundo apellido',
    'Número telefónico',
    'Correo electrónico',
  ];
  readonly twoFieldNames = [
    'País de residencia',
    'Departamento / Estado de residencia',
    'Ciudad de residencia',
    'Dirección de residencia',
    'Barrio de residencia',
    'Fecha de nacimiento',
    'Sexo',
    'Tipo persona',
    'Correo electrónico',
  ];
  readonly threeFieldNames = [
    'Fecha de afiliación',
    'NIT Empresa',
    'NIT Establecimiento',
    'Nombre establecimiento',
    'Número telefónico establecimiento',
    'Dirección establecimiento',
    'Rol',
    'Estado (Activo/Inactivo)',
  ];
  readonly fourFieldNames = [
    'ID Agencia',
    'Crear Siempre Afiliado',
    'Crear Siempre Cuenta',
    'Crear Siempre Establecimiento',
    'Código externo',
  ];

  constructor(private _formBuilder: FormBuilder) {}

  stepperNext(ev: UserRegistrationResult) {
    console.log(ev);

  }
}