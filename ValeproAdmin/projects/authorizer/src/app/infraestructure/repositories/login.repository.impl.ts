import { Injectable } from "@angular/core";
import { LoginRepository } from "../../core/repositories/login.repository";
import { AuthService } from '../services/auth.service';
import { LoginRequestModel } from "../../core/models/loginRequest.model";
import { Observable, map } from "rxjs";
import { Store } from "@ngrx/store";
import { loadedLogin } from "projects/store-lib/src/public-api";
import { ResponseBase } from "../../core/models/responseBase.model";
import { LoginResponseModel } from "../../core/models/loginResponse.model";

@Injectable({
    providedIn: 'root'
})
export class LoginRepositoryImpl implements LoginRepository {

    constructor(
        private authService: AuthService,
        private store: Store
        ) {
    }

    affiliateLogin(data: LoginRequestModel): Observable<ResponseBase<LoginResponseModel>> {
        return this.authService.affiliateLogin(data).pipe(map((result: ResponseBase<LoginResponseModel>) =>{
          this.store.dispatch(loadedLogin({responseLogin:result.data}));
          return result;
        }));
    }

}
