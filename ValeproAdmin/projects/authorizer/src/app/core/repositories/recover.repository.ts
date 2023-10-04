import { Observable } from 'rxjs';
import { GenerateCodeRequestModel, GenerateCodeResponseModel } from '../models/generateCodeRequest.model';
import { ValidateCodeRequestModel, ValidateCodeResponseModel } from '../models/validateCode.model';
import { ResponseBase } from '../models/responseBase.model';

export abstract class RecoverRepository {

  abstract generateCode(data: GenerateCodeRequestModel): Observable<ResponseBase<GenerateCodeResponseModel>>;
  abstract validateCode(data: ValidateCodeRequestModel): Observable<ResponseBase<ValidateCodeResponseModel>>;

}
