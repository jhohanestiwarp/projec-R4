import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { LoginRequestModel } from '../../core/models/loginRequest.model';
import { AuthorizerMapper } from '../../core/mappers/authorizer.mapper';
import { GenerateCodeRequestModel, GenerateCodeResponseModel } from '../../core/models/generateCodeRequest.model';
import { ValidateCodeRequestModel, ValidateCodeResponseModel } from '../../core/models/validateCode.model';
import { ResponseBase } from '../../core/models/responseBase.model';
import { GenerateCodeResponseDTO } from '../dto/generateCode.dto';
import { ValidateCodeResponseDTO } from '../dto/validateCode.dto';
import { LoginResponseDTO } from '../dto/loginResponse.dto';
import { LoginResponseModel } from '../../core/models/loginResponse.model';
import { environment } from 'projects/authorizer/src/environments/environment';
import { AuthRepository } from '../../core/repositories/auth.repository';
import { ErrorResponseModel } from '../../core/models/responseError.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthRepository {

  http = inject(HttpClient);

  affiliateLogin(requestModel: LoginRequestModel): Observable<ResponseBase<LoginResponseModel>> {
    let request = AuthorizerMapper.loginfromDomainToApi(requestModel);
    return this.http.post<ResponseBase<LoginResponseDTO>>(`${environment.apiAuth}/api/v1/login/login-administrator`, request)
      .pipe(map((data: ResponseBase<LoginResponseDTO>) => {
        return {
          codeId: data.codeId,
          data: AuthorizerMapper.loginfromApiToDomain(data.data),
          message: data.message
        }
      }));
  }

  generateCode(requestModel: GenerateCodeRequestModel): Observable<ResponseBase<GenerateCodeResponseModel>> {
    let request = AuthorizerMapper.generateCodeFromDomainToApi(requestModel);
    return this.http.post<ResponseBase<GenerateCodeResponseDTO>>(`${environment.apiAuth}/api/v1/user/reset-password-and-send-code`, request)
      .pipe(
        map((data: ResponseBase<GenerateCodeResponseDTO>) => {
          return {
            codeId: data.codeId,
            data: AuthorizerMapper.generateCodeFromApiToDomain(data.data),
            message: data.message
          }
        })
      );
  }

  validateCode(requestModel: ValidateCodeRequestModel): Observable<ResponseBase<ValidateCodeResponseModel>> {
    let request = AuthorizerMapper.validateCodeFromDomainToApi(requestModel);
    return this.http.post<ResponseBase<ValidateCodeResponseDTO>>(`${environment.apiAuth}/api/v1/user/change-password-with-code`, request)
      .pipe(
        map((data: ResponseBase<ValidateCodeResponseDTO>) => ({
          codeId: data.codeId,
          data: AuthorizerMapper.validateCodeFromApiToDomain(data.data),
          message: data.message
        })),
        catchError((error: HttpErrorResponse) => {
          let errorResponse: ResponseBase<ErrorResponseModel[]> = new ResponseBase<ErrorResponseModel[]>(
            error.error.CodeId,
            error.error.Message,
            error.error.Data as ErrorResponseModel[]
          );
          return throwError(() => errorResponse);
        }));
  }

}
