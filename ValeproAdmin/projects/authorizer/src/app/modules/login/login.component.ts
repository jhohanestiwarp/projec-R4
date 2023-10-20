import { Component, Injectable, inject } from '@angular/core';
import { LoginRequestModel } from '../../core/models/loginRequest.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadLogin, loadedLogin, selectResponseLoginLoading } from 'projects/store-lib/src/public-api';
import { ResponseBase } from '../../core/models/responseBase.model';
import { LoginResponseModel } from '../../core/models/loginResponse.model';
import { Router } from '@angular/router';
import { DialogParams } from 'projects/dialogs-lib/src/models/dialog-params.model';
import { DialogService } from 'projects/dialogs-lib/src/services/dialog.service';
import { ToastrService } from 'ngx-toastr';
import { AuthRepository } from '../../core/repositories/auth.repository';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class LoginComponent {
  logo: string = '';
  colorbackground: string = '';
  btnColor: string = '';
  hide = true;
  loginForm!: FormGroup;

  $loading: Observable<boolean> = new Observable();

  //#region Injectables
  authRepository = inject(AuthRepository);
  store = inject(Store<any>);
  router = inject(Router);
  dialogService = inject(DialogService);
  formBuilder = inject(FormBuilder);
  toastService = inject(ToastrService);
  //#endregion

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      Id: ['', [Validators.required]],
      Pass: ['', [Validators.required]]
    });
  }

  login() {
    if (!this.loginForm.get('Id')?.value || !this.loginForm.get('Pass')?.value) {
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
    let data: LoginRequestModel = {
      UserName: this.loginForm.get('Id')?.value,
      Password: this.loginForm.get('Pass')?.value,
      ProgramId: 0
    }

    //Load login before send http request
    this.store.dispatch(loadLogin());
    //Get a loading status
    this.$loading = this.store.select(selectResponseLoginLoading);

    //Send http request
    this.authRepository.affiliateLogin(data).subscribe({
      next: (res: ResponseBase<LoginResponseModel>) => {
        this.store.dispatch(loadedLogin({responseLogin:res.data}));
        if (res.data.requiredNewPassword) {
          //pop up de actualizar contraseña
          let params: DialogParams = {
            success: true,
            title: '¡ Debes actualizar tu contraseña !',
            confirmText: 'El código de verificación fue enviado a tu número de celular: ' + res.data.hiddenPhone + ' o al correo electrónico: ' + res.data.hiddenEmail
          };
          this.dialogService.openConfirmDialog(params).afterClosed()
            .subscribe({
              next: (res) => {
                sessionStorage.setItem('user', data.UserName);
                this.router.navigate(['/update']);
              },
              error: (err) => {
              }
            });
        } else {
          this.router.navigate(['main/home']);
        }
      },
      error: (error) => {
        if (error.error.Data[0].ErrorCode == "1015") {
          this.toastService.warning(error.error.Data[0].ErrorMessage, undefined, {
            timeOut: 9000,
            progressBar: true,
            disableTimeOut: 'extendedTimeOut',
            progressAnimation: 'increasing',
            tapToDismiss: false,
            positionClass: 'toast-top-center',
            closeButton: true,
          });
        }
        else {
          this.toastService.error(error.error.Data[0].ErrorMessage, undefined, {
            timeOut: 9000,
            progressBar: true,
            disableTimeOut: 'extendedTimeOut',
            progressAnimation: 'increasing',
            tapToDismiss: false,
            positionClass: 'toast-top-center',
            closeButton: true,
          });
        }


      },
    });
  }

  navigate() {
    this.router.navigate(['/generate']);
  }

}




