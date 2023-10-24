import { Observable } from 'rxjs';
import { ResponseBase } from '../models/responseBase.model';
import { GetAllUserRequest } from '../models/getAllUserRequest.model';
import { GetProgramConfigRequest } from '../models/getProgramConfigRequest.model';
import { SaveFormConfigRequest } from '../models/saveFormConfigRequest.model';
import { GetAllUserResponse } from '../models/getAllUserResponse.model';
import { GetCreateUserFormByProgramResponse } from '../models/getCreateUserFormByProgramResponse.model';
import { GetProgramConfigResponse } from '../models/getProgramConfigResponse.model';


export abstract class UserFormManagementRepository {
  abstract getAllUser(params: GetAllUserRequest): Observable<ResponseBase<GetAllUserResponse[]>>;
  abstract getConfigCreateUserFormByProgram(params: GetProgramConfigRequest): Observable<ResponseBase<GetCreateUserFormByProgramResponse>>;
  abstract getProgramConfig(params: GetProgramConfigRequest): Observable<ResponseBase<GetProgramConfigResponse>> ;
  abstract saveFormConfig(params: SaveFormConfigRequest): Observable<ResponseBase<null>>;
}
