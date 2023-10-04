import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectResponseLogin } from 'projects/store-lib/src/public-api';
import { AppState } from 'projects/store-lib/src/lib/store/app.state';
import { LoginRequestModel } from 'projects/authorizer/src/app/core/models/loginRequest.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let loginResponse;
    this.store.select(selectResponseLogin).subscribe(data => {
      loginResponse = data; // Almacena la data seleccionada en la variable loginResponse
      console.log('loginresponseintercept',loginResponse)
    });
    return next.handle(request);
  }
}
