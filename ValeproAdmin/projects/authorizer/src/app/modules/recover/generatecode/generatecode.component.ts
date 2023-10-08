import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'projects/authorizer/src/environments/environment';
import { DialogParams } from 'projects/dialogs-lib/src/models/dialog-params.model';
import { DialogService } from 'projects/dialogs-lib/src/services/dialog.service';
import { RecoverRepository } from '../../../core/repositories/recover.repository';
import { GenerateCodeRequestModel, GenerateCodeResponseModel } from '../../../core/models/generateCodeRequest.model';
import { ResponseBase } from '../../../core/models/responseBase.model';



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
  GenerateForm:FormGroup;

  constructor(
    private router: Router,
    private dialogService: DialogService,
    private recoverRepository: RecoverRepository,
    private formBuilder: FormBuilder,
  ) {
    this.GenerateForm = this.formBuilder.group({
      Id: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
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

  navigate() {
    let data: GenerateCodeRequestModel ={
      UserName: this.GenerateForm.get('Id')?.value,
      ProgramId: 0
    }
    this.recoverRepository.generateCode(data).subscribe({
      next: (res: ResponseBase<GenerateCodeResponseModel>) => {
        this.senPopUp(res.data.Phone, res.data.Email);
        sessionStorage.setItem('username', data.UserName);
        this.router.navigate(['/recover']);

      },
      error: (error) => {
        console.error(error);
        //pop up de error
      },
    });
  }

  senPopUp(phone: number, email: string) {
    let params: DialogParams = {
      success: false,
      title: 'El código de verificación fue enviado',
      confirmText: 'a tu número de celular: ' + phone + ' o al correo electrónico: ' + email
    };
    this.dialogService.openConfirmDialog(params);
  }
}
