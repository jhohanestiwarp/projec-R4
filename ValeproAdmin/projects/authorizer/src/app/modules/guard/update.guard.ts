import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginResponseModel } from '../../core/models/loginResponse.model';
import { getSession } from 'projects/store-lib/src/lib/store/storage/storage.storage';

export const updateGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  if(!sessionStorage.getItem('userLoginData')) {
    router.navigate(['/login']);
    return false;
  }
  let session: LoginResponseModel = getSession<LoginResponseModel>('userLoginData');

  if(!session.requiredNewPassword){
    router.navigate(['/main/home']);
    return false;
  }
  return true;
};
