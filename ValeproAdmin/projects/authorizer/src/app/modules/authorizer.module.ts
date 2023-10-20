import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizerRoutingModule } from './authorizer-routing.module';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RecaptchaModule } from 'ng-recaptcha';
import { MatConfirmDialogComponent } from 'projects/dialogs-lib/src/components/mat-confirm-dialog/mat-confirm-dialog.component';
import { DialogService } from 'projects/dialogs-lib/src/services/dialog.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CodeInputModule } from 'angular-code-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from 'projects/store-lib/src/public-api';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthRepository } from '../core/repositories/auth.repository';
import { AuthService } from '../infraestructure/services/auth.service';


@NgModule({
  declarations: [
    LoginComponent,
    MatConfirmDialogComponent,
    UpdatePasswordComponent,
  ],
  imports: [
    AuthorizerRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    RecaptchaModule,
    MatDialogModule,
    CodeInputModule.forRoot({
      codeLength: 6,
      isCharsCode: false,
      code: ''
    }),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('loginReducer', loginReducer),
    ToastrModule.forRoot()
  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: AuthRepository,
      useClass: AuthService,
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },
    DialogService,
    ToastrService
  ]
})
export class AuthorizerModule { }
