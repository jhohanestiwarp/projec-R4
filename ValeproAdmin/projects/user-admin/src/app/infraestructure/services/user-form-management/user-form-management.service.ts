import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment as env } from '../../../../environments/environment';
import { GetAllUserRequest } from '../../../core/models/getAllUserRequest.model';
import { GetProgramConfigRequest } from '../../../core/models/getProgramConfigRequest.model';
import { ResponseBase } from '../../../core/models/responseBase.model';
import { SaveFormConfigRequest } from '../../../core/models/saveFormConfigRequest.model';
import { UserFormManagementRepository } from '../../../core/repositories/user-form-management.repository';
import { GetAllUserResponse } from '../../../core/models/getAllUserResponse.model';
import { GetCreateUserFormByProgramResponse } from '../../../core/models/getCreateUserFormByProgramResponse.model';
import { GetProgramConfigResponse } from '../../../core/models/getProgramConfigResponse.model';
import { UserFormGetAllUserMapper } from '../../../core/mappers/userFormGetAllUser.mapper';
import { UserFormSaveFormConfigMapper } from '../../../core/mappers/userFormSaveFormConfig.mapper';
import { GetAllUserDTO } from '../../dto/userFormManagement.dto';

@Injectable({
  providedIn: 'root'
})
export class UserFormManagementService implements UserFormManagementRepository {
  private baseUrl = 'api/v1/';

  constructor(private http: HttpClient) { }

  getAllUser(params: GetAllUserRequest): Observable<ResponseBase<GetAllUserResponse[]>> {
    const search = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        search.append(key,`${value}`);
      }
    });
    const url = `${env.apiUrlAuthUser}${this.baseUrl}/UserManagement/getUsers?${search.toString()}`;
    return this.http.get<ResponseBase<GetAllUserDTO[]>>(url)
      .pipe(map(res => ({ ...res, data: res.data.map(UserFormGetAllUserMapper.fromApiToDomain) })));
  }

  getConfigCreateUserFormByProgram(params: GetProgramConfigRequest): Observable<ResponseBase<GetCreateUserFormByProgramResponse>> {
    const search = new URLSearchParams();
    search.append('FormularyId', `${params.formularyId}`);
    search.append('ProgramId', `${params.programId}`);
    const url = `${env.apiUrlAuthUser}${this.baseUrl}/attributes-configuration-form?${search.toString()}`;
    return this.http.get<ResponseBase<GetCreateUserFormByProgramResponse>>(url);
  }

  getProgramConfig(params: GetProgramConfigRequest): Observable<ResponseBase<GetProgramConfigResponse>> {
    const search = new URLSearchParams();
    search.append('FormularyId', `${params.formularyId}`);
    search.append('ProgramId', `${params.programId}`);
    const url = `${env.apiUrlAuthUser}${this.baseUrl}/form-attributes?${search.toString()}`;
    return this.http.get<ResponseBase<GetProgramConfigResponse>>(url);
  }

  saveFormConfig(params: SaveFormConfigRequest): Observable<ResponseBase<null>> {
    const url = `${env.apiUrlAuthUser}${this.baseUrl}/FormManagement/save-configuration-form`;
    const saveParams = UserFormSaveFormConfigMapper.fromDomainToApi(params);
    return this.http.post<ResponseBase<null>>(url, saveParams);
  }
}
