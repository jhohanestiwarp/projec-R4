import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectResponseLogin } from 'projects/store-lib/src/public-api';
import { AppState } from 'projects/store-lib/src/lib/store/app.state';
import { LoginResponseModel } from 'projects/authorizer/src/app/core/models/loginResponse.model';
import { getSession } from 'projects/store-lib/src/lib/store/storage/storage.storage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(selectResponseLogin).pipe(
      take(1), // Toma un valor y se desuscribe automáticamente
      switchMap((res: LoginResponseModel) => {
        if (res.accessToken !== '' || sessionStorage.getItem('userLoginData')) {
          res.accessToken == ''? res = getSession<LoginResponseModel>('userLoginData') || '' : res = res;
          if (res.accessToken && res.sessionId) {
            const modifiedHeaders = request.headers
              .set('Authorization', res.accessToken)
              .set('SessionId', res.sessionId.toString());

            const modifiedRequest = request.clone({ headers: modifiedHeaders });

            return next.handle(modifiedRequest);
          } else {
            return next.handle(request);
          }
        } else {
          return next.handle(request);
        }
      })
    );
  }
}
