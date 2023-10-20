import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DialogParams } from 'projects/dialogs-lib/src/models/dialog-params.model';
import { DialogService } from 'projects/dialogs-lib/src/services/dialog.service';
import { ValidateCodeRequestModel, ValidateCodeResponseModel } from '../../core/models/validateCode.model';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponseBase } from '../../core/models/responseBase.model';
import { GenerateCodeRequestModel, GenerateCodeResponseModel } from '../../core/models/generateCodeRequest.model';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthRepository } from '../../core/repositories/auth.repository';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent {
  logo: string = '';
  hide = true;
  hide1 = true;
  codeCompleteControl: string = '';
  anio: number = new Date().getFullYear();
  showError: boolean = false;
  date = new Date('2020-01-01 00:05');
  minutes: string = '';
  seconds: string = '';
  colorbackground: string = '';
  btnColor: string = '';
  updateForm!: FormGroup;
  user: string = '';
  showResend: boolean = false;

  //#region Injectable
  router = inject(Router);
  dialogService = inject(DialogService);
  authRepository = inject(AuthRepository);
  toastService = inject(ToastrService);
  //#endregion



  ngOnInit(): void {
    this.createForm();
    this.countDown();
    this.user = sessionStorage.getItem('user')!;
  }

  createForm() {
    this.updateForm = new FormGroup({
      Pass: new FormControl('', [Validators.required]),
      NewPass: new FormControl('', [Validators.required]),
    });
  }

  get codeComplete(): AbstractControl | null {
    return this.updateForm.get('codeComplete');
  }

  onCodeCompleted(code: string): void {
    this.codeCompleteControl = code;

  }


  onInputFocus(hide: boolean) {
    if (hide === this.hide1) {
      this.hide1 = true;
    } else {
      this.hide = true;
    }
  }

  onInputBlur(hide: boolean) {
    if (hide === this.hide1) {
      this.hide1 = false;
    } else {
      this.hide = false;
    }
  }


  countDown(): void {
    let padLeft = (n: any) => '00'.substring(0, '00'.length - n.length) + n;
    let interval = setInterval(() => {
      this.minutes = this.date.getMinutes() + '';
      this.seconds = padLeft(this.date.getSeconds() + '');
      this.date = new Date(this.date.getTime() - 1000);
      if (this.minutes === '0' && this.seconds === '00') {
        clearInterval(interval);
        this.date = new Date('2020-01-01 00:05');
        this.showResend = true;
      }
      if (this.router.url !== '/update') {
        clearInterval(interval);
      }
    }, 1000);
  }

  confirmPassword() {
    if (this.codeCompleteControl.length < 6) {
      this.toastService.error('Código incorrecto', undefined, {
        timeOut: 9000,
        progressBar: true,
        disableTimeOut: 'extendedTimeOut',
        progressAnimation: 'increasing',
        tapToDismiss: false,
        positionClass: 'toast-top-center',
        closeButton: true,
      });
      return;
    }

    if (this.updateForm.get('Pass')?.value != this.updateForm.get('NewPass')?.value) {
      this.toastService.error('Las contraseñas no coinciden', undefined, {
        timeOut: 9000,
        progressBar: true,
        disableTimeOut: 'extendedTimeOut',
        progressAnimation: 'increasing',
        tapToDismiss: false,
        positionClass: 'toast-top-center',
        closeButton: true,
      });
      return;
    }

    if (!this.updateForm.get('Pass')?.value || !this.updateForm.get('NewPass')?.value) {
      this.toastService.error('La información ingresada no es válida.', undefined, {
        timeOut: 9000,
        progressBar: true,
        disableTimeOut: 'extendedTimeOut',
        progressAnimation: 'increasing',
        tapToDismiss: false,
        positionClass: 'toast-top-center',
        closeButton: true,
      });
      return;
    }
    this.sendCodeValidate();

  }



  sendCodeValidate() {
    let data: ValidateCodeRequestModel = {
      userName: this.user,
      programId: 0,
      newPassword: this.updateForm.get('Pass')?.value,
      newPasswordVerified: this.updateForm.get('NewPass')?.value,
      confirmationCode: this.codeCompleteControl
    };
    this.authRepository.validateCode(data).subscribe({
      next: (res: ResponseBase<ValidateCodeResponseModel>) => {
        let params: DialogParams = {
          success: true,
          confirmText: '¡Tu contraseña fue cambiada con éxito!'
        };
        this.dialogService.openConfirmDialog(params);
        this.router.navigate(['/login']);

      },
      error: (error: HttpErrorResponse) => {
        this.toastService.error(error.error.Message, undefined, {
          timeOut: 9000,
          progressBar: true,
          disableTimeOut: 'extendedTimeOut',
          progressAnimation: 'increasing',
          tapToDismiss: false,
          positionClass: 'toast-top-center',
          closeButton: true,
        });
      },
    });
  }

  resendCode() {
    let data: GenerateCodeRequestModel = {
      UserName: this.user,
      ProgramId: 0
    }
    this.authRepository.generateCode(data).subscribe({
      next: (res: ResponseBase<GenerateCodeResponseModel>) => {
        let params: DialogParams = {
          success: false,
          title: 'El código de verificación fue enviado',
          confirmText: 'a tu número de celular: ' + res.data.Phone + ' o al correo electrónico: ' + res.data.Email
        };
        this.showResend = false;
        this.dialogService.openConfirmDialog(params);
        this.countDown();
      },
      error: (error) => {
        this.toastService.error(error.error.Data[0].ErrorMessage, undefined, {
          timeOut: 9000,
          progressBar: true,
          disableTimeOut: 'extendedTimeOut',
          progressAnimation: 'increasing',
          tapToDismiss: false,
          positionClass: 'toast-top-center',
          closeButton: true,
        });
        //pop up de error
      },
    });
  }

}
