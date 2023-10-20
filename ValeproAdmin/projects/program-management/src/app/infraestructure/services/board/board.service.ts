import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramRepository } from '../../../core/repositories/program.repository';
import { environment as env } from '../../../../environments/environment';
import { BoardCreateMapper } from '../../../core/mappers/boardCreate.mapper';
import { ProgramSaveRequestModel } from '../../../core/models/programSaveRequest.model';
import { ResponseBase } from '../../../core/models/responseBase.model';
import { ProgramDTO } from '../../dto/program.dto';
import { BoardCreateRequest } from '../../../core/models/boardCreateRequest.model';
import { BoardRepository } from '../../../core/repositories/board.repository';
import { BoardCreateResponse } from '../../../core/models/boardCreateResponse.model';
import { BoardDeleteMapper } from '../../../core/mappers/boardDelete.mapper';
import { BoardDeleteResponse } from '../../../core/models/boardDeleteResponse.model';
import { BoardDeleteRequest } from '../../../core/models/boardDeleteRequest.model';
import { BoardByTypeAndProgramMapper } from '../../../core/mappers/boardByTypeAndProgram.mapper';
import { BoardByTypeAndProgramRequest } from '../../../core/models/boardByTypeAndProgramRequest.model';
import { BoardByTypeAndProgramResponse } from '../../../core/models/boardByTypeAndProgramResponse.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService implements BoardRepository {
  private baseUrl = '/api/v1/board/';

  constructor(private http: HttpClient) { }

  boardCreate(params: BoardCreateRequest) {
    const boardParams = BoardCreateMapper.fromDomainToApi(params);

    return this.http.post<BoardCreateResponse>(`${env.apiUrlBoard}${this.baseUrl}`, boardParams);
  }

  boardDelete(params: BoardDeleteRequest) {
    const boardParams = BoardDeleteMapper.fromDomainToApi(params);
    return this.http.delete<BoardDeleteResponse>(`${env.apiUrlBoard}${this.baseUrl}${boardParams.BoardId}`)
  }

  getBoardByTypeAndProgram(params: BoardByTypeAndProgramRequest) {
    const boardParams = BoardByTypeAndProgramMapper.fromDomainToApi(params);
    return this.http.post<BoardByTypeAndProgramResponse>(`${env.apiUrlBoard}${this.baseUrl}`, boardParams)
  }
}
