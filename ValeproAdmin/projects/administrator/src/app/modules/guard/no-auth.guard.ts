import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  if (!sessionStorage.getItem('userLoginData')) {
    return true;
  } else {
    router.navigate(['/main/home']);
    return false;
  }
};
