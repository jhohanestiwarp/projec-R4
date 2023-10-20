import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'projects/authorizer/src/environments/environment';
import { DialogParams } from 'projects/dialogs-lib/src/models/dialog-params.model';
import { DialogService } from 'projects/dialogs-lib/src/services/dialog.service';
import { GenerateCodeRequestModel, GenerateCodeResponseModel } from '../../../core/models/generateCodeRequest.model';
import { ResponseBase } from '../../../core/models/responseBase.model';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthRepository } from '../../../core/repositories/auth.repository';
import { getSession } from 'projects/store-lib/src/lib/store/storage/storage.storage';



@Component({
  selector: 'app-generatecode',
  templateUrl: './generatecode.component.html',
  styleUrls: ['./generatecode.component.scss']
})
export class GeneratecodeComponent implements OnInit {
  keyCaptcha = environment.kaptchaApiKey;
  logo: string = '';
  submitted = false;
  captcha = "";
  hide = true;
  hide1 = true;
  colorbackground: string = '';
  btnColor: string = '';
  GenerateForm!: FormGroup;
  mostrarMensajeError: boolean = false;

  //#region Injectable
  router = inject(Router);
  dialogService = inject(DialogService);
  authRepository = inject(AuthRepository);
  toastService = inject(ToastrService);
  formBuilder = inject(FormBuilder);
  //#endregion


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.GenerateForm = this.formBuilder.group({
      Id: ['', [Validators.required]],
    });
  }


  resolved(token: string) {
    this.captcha = token;
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

  onSubmit() {

    if (!this.GenerateForm.get('Id')?.value) {
      this.toastService.error('Todos los campos son requeridos', undefined, {
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

    if (this.captcha === '') {
      this.mostrarMensajeError = true;
      return;
    }
    this.navigate();
  }


  navigate() {
    let data: GenerateCodeRequestModel = {
      UserName: this.GenerateForm.get('Id')?.value,
      ProgramId: getSession<number>('programId'),
    }



    this.authRepository.generateCode(data).subscribe({
      next: (res: ResponseBase<GenerateCodeResponseModel>) => {
        this.sendPopUp(res.data.Phone, res.data.Email);
        sessionStorage.setItem('username', data.UserName);
        this.router.navigate(['/recover']);
      },
      error: (error: HttpErrorResponse) => {
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

  sendPopUp(phone: number, email: string) {
    let params: DialogParams = {
      success: false,
      title: 'El código de verificación fue enviado',
      confirmText: 'a tu número de celular: ' + phone + ' o al correo electrónico: ' + email
    };
    this.dialogService.openConfirmDialog(params);
  }
}
