import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramRepository } from '../../../core/repositories/program.repository';
import { environment } from '../../../../environments/environment';
import { ProgramMapper } from '../../../core/mappers/program.mapper';
import { ProgramSaveRequestModel } from '../../../core/models/programSaveRequest.model';
import { ResponseBase } from '../../../core/models/responseBase.model';
import { ProgramDTO } from '../../dto/program.dto';

@Injectable({
  providedIn: 'root'
})
export class ProgramService implements ProgramRepository {
  private baseUrl = '/api/v1/program/register';

  constructor(private http: HttpClient) { }

  programSave(programModel: ProgramSaveRequestModel): Observable<ResponseBase<[]>> {
    const program: ProgramDTO = ProgramMapper.fromDomainToApi(programModel);
    return this.http.post<ResponseBase<[]>>(`${environment.apiUrlPrograms}${this.baseUrl}`, program);
  }
}
