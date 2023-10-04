import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { CodeInputModule } from 'angular-code-input';
import { GeneratecodeComponent } from './generatecode/generatecode.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    RecoverPasswordComponent,
    GeneratecodeComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    CodeInputModule.forRoot({
      codeLength: 6,
      isCharsCode: false,
      code: ''
    }),
    RecaptchaModule
  ]
})
export class RecoverModule { }
