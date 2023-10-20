import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LookAndFeelDTO } from '../dto/lookAndFeel.dto';
import { Observable, map } from 'rxjs';
import { LookAndFeelModel } from '../../core/models/lookAndFeel.model';
import { LookAndFeelMapper } from '../../core/mappers/lookAndFeel.mapper';
import { LookAndFeelRepository } from '../../core/repositories/lookAndFeel.repository';
import { ResponseBase } from '../../core/models/responseBase.model';
import { ProgramRequestModel } from '../../core/models/programRequest.model';
import { ProgramResponseModel } from '../../core/models/programResponse.model';
import { environment } from 'projects/administrator/src/environments/environment';
import { ProgramResponseDto } from '../dto/programResponse.dto';
@Injectable({
  providedIn: 'root'
})
export class LookAndFeelService implements LookAndFeelRepository {

  constructor(private http: HttpClient) { }


  getProgram(programRequets: ProgramRequestModel): Observable<ResponseBase<ProgramResponseModel>> {
    let programRequestDto = LookAndFeelMapper.programDomainToApi(programRequets)
    return this.http.post<ResponseBase<ProgramResponseDto>>(environment.apiUrlProgram + '/api/v1/PublicProgram/urlToProgramId', programRequestDto)
      .pipe(map((data: ResponseBase<ProgramResponseDto>) => {
        return {
          codeId: data.codeId,
          message: data.message,
          data: LookAndFeelMapper.programApiToDomain(data.data)
        }
      }));
  }


  getLookAndFeel(programId: number): Observable<LookAndFeelModel> {
    return this.http.get<LookAndFeelDTO>(`assets/lookandfeel.json`)
      .pipe(map((data) => LookAndFeelMapper.fromApiToDomain(data)));
  }
}
