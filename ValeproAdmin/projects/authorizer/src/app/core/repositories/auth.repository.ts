import { Observable } from 'rxjs';
import { LoginRequestModel } from '../models/loginRequest.model';
import { ResponseBase } from '../models/responseBase.model';
import { LoginResponseModel } from '../models/loginResponse.model';
import { GenerateCodeRequestModel, GenerateCodeResponseModel } from '../models/generateCodeRequest.model';
import { ValidateCodeRequestModel, ValidateCodeResponseModel } from '../models/validateCode.model';
import { ErrorResponseModel } from '../models/responseError.model';

export abstract class AuthRepository {

  abstract affiliateLogin(data: LoginRequestModel): Observable<ResponseBase<LoginResponseModel>>;
  abstract generateCode(data: GenerateCodeRequestModel): Observable<ResponseBase<GenerateCodeResponseModel>>;
  abstract validateCode(requestModel: ValidateCodeRequestModel): Observable<ResponseBase<ValidateCodeResponseModel>>

}
