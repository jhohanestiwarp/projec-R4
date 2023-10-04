import { Observable } from 'rxjs';
import { LoginRequestModel } from '../models/loginRequest.model';
import { ResponseBase } from '../models/responseBase.model';
import { LoginResponseModel } from '../models/loginResponse.model';

export abstract class LoginRepository {

  abstract affiliateLogin(data: LoginRequestModel): Observable<ResponseBase<LoginResponseModel>>;

}