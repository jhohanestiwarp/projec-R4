import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DialogParams } from 'projects/dialogs-lib/src/models/dialog-params.model';
import { DialogService } from 'projects/dialogs-lib/src/services/dialog.service';
import { ValidateCodeRequestModel, ValidateCodeResponseModel } from '../../core/models/validateCode.model';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponseBase } from '../../core/models/responseBase.model';
import { RecoverRepository } from '../../core/repositories/recover.repository';
import { GenerateCodeRequestModel, GenerateCodeResponseModel } from '../../core/models/generateCodeRequest.model';

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
  updateForm: FormGroup;
  user: string = '';

  constructor(
    private router: Router,
    private dialogService: DialogService,
    private recoverRepository: RecoverRepository
  ) {
    this.updateForm = new FormGroup({
      Pass: new FormControl('', [Validators.required]),
      NewPass: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.countDown();
    this.user = sessionStorage.getItem('username')!;
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
    console.log(this.hide);
  }

  onInputBlur(hide: boolean) {
    if (hide === this.hide1) {
      this.hide1 = false;
    } else {
      this.hide = false;
    }
    console.log(this.hide);
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
      }
      if (this.router.url !== '/update') {
        clearInterval(interval);
      }
    }, 1000);
  }

  confirmPassword() {
    let data: ValidateCodeRequestModel ={
      userName: this.user,
      programId: 0,
      newPassword: this.updateForm.get('Pass')?.value,
      newPasswordVerified: this.updateForm.get('NewPass')?.value,
      confirmationCode: this.codeCompleteControl
    };
    this.recoverRepository.validateCode(data).subscribe({
      next: (res: ResponseBase<ValidateCodeResponseModel>) => {
        let params: DialogParams = {
          success: true,
          confirmText: '¡Tu contraseña fue cambiada con éxito!'
        };
        this.dialogService.openConfirmDialog(params);

      },
      error: (error) => {
        console.log(error);
        //pop up de error
      },
    });

  }

  resendCode(){
    let data: GenerateCodeRequestModel ={
      UserName: this.user,
      ProgramId: 0
    }
    this.recoverRepository.generateCode(data).subscribe({
      next: (res: ResponseBase<GenerateCodeResponseModel>) => {
        console.log(res);
        let params: DialogParams = {
          success: false,
          title: 'El código de verificación fue enviado',
          confirmText: 'a tu número de celular:' + 'o al correo electrónico: *****vp@gmail.com'
        };
        this.dialogService.openConfirmDialog(params);
      },
      error: (error) => {
        console.error(error);
        //pop up de error
      },
    });
  }

}
