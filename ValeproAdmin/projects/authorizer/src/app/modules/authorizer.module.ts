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
import { LoginRepository } from '../core/repositories/login.repository';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRepositoryImpl } from '../infraestructure/repositories/login.repository.impl';
import { RecoverRepository } from '../core/repositories/recover.repository';
import { RecoverRepositoryImpl } from '../infraestructure/repositories/recover.repository.impl';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { FEATURE_REDUCERS, StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from 'projects/store-lib/src/lib/store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { loginReducer } from 'projects/store-lib/src/public-api';


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
    StoreModule.forFeature('feature', loginReducer),
    StoreDevtoolsModule.instrument({ name: 'TEST' })

  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: LoginRepository,
      useClass: LoginRepositoryImpl,
    },
    {
      provide: RecoverRepository,
      useClass: RecoverRepositoryImpl,
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },
    DialogService,

  ]
})
export class AuthorizerModule { }
