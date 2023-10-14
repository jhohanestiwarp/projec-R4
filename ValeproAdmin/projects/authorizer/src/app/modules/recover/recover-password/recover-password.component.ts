import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogParams } from 'projects/dialogs-lib/src/models/dialog-params.model';
import { DialogService } from 'projects/dialogs-lib/src/services/dialog.service';
import { RecoverRepository } from '../../../core/repositories/recover.repository';
import { ResponseBase } from '../../../core/models/responseBase.model';
import { ValidateCodeRequestModel, ValidateCodeResponseModel } from '../../../core/models/validateCode.model';
import { GenerateCodeRequestModel, GenerateCodeResponseModel } from '../../../core/models/generateCodeRequest.model';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  logo: string = '';
  hide = true;
  hide1 = true;
  recoverForm: FormGroup;
  anio: number = new Date().getFullYear();
  showError: boolean = false;
  date = new Date('2020-01-01 00:05');
  minutes: string = '';
  seconds: string = '';
  colorbackground: string = '';
  btnColor: string = '';
  codeCompleteControl: string = '';
  username: string = '';
  showResend: boolean = false;
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private recoverRepository: RecoverRepository,
    private toastService: ToastrService
  ) {
    this.recoverForm = new FormGroup({
      Pass: new FormControl('', [Validators.required]),
      NewPass: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.countDown();
    this.username = sessionStorage.getItem('username')!;
  }

  get codeComplete(): AbstractControl | null {
    return this.recoverForm.get('codeComplete');
  }

  onCodeCompleted(code: any): void {
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
        this.showResend = true;
        this.date = new Date('2020-01-01 00:05');
      }
      if (this.router.url !== '/recover') {
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

    if (this.recoverForm.get('Pass')?.value != this.recoverForm.get('NewPass')?.value) {
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

    if (!this.recoverForm.get('Pass')?.value || !this.recoverForm.get('NewPass')?.value) {
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
      userName: this.username,
      programId: 0,
      newPassword: this.recoverForm.get('Pass')?.value,
      newPasswordVerified: this.recoverForm.get('NewPass')?.value,
      confirmationCode: this.codeCompleteControl
    };
    this.recoverRepository.validateCode(data).subscribe({
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
      UserName: this.username,
      ProgramId: 0
    }
    this.recoverRepository.generateCode(data).subscribe({
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
        console.error(error);

      },
    });
  }


}
