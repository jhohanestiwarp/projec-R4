import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';
import { BoardCreateMapper } from '../../../core/mappers/boardCreate.mapper';
import { BoardCreateRequest } from '../../../core/models/boardCreateRequest.model';
import { BoardRepository } from '../../../core/repositories/board.repository';
import { BoardDeleteRequest } from '../../../core/models/boardDeleteRequest.model';
import { BoardByTypeAndProgramMapper } from '../../../core/mappers/boardByTypeAndProgram.mapper';
import { BoardByTypeAndProgramRequest } from '../../../core/models/boardByTypeAndProgramRequest.model';
import { BoardCreateResponseModel } from '../../../core/models/boardCreateResponse.model';
import { ResponseBase } from '../../../core/models/responseBase.model';
import { BoardDeleteResponseModel } from '../../../core/models/boardDeleteResponse.model';
import { BoardByTypeAndProgramResponse } from '../../../core/models/boardByTypeAndProgramResponse.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService implements BoardRepository {
  private baseUrl = '/api/v1/board';

  constructor(private http: HttpClient) { }

  boardCreate(params: BoardCreateRequest): Observable<ResponseBase<BoardCreateResponseModel>> {
    const boardParams = BoardCreateMapper.fromDomainToApi(params);
    return this.http.post<ResponseBase<BoardCreateResponseModel>>(`${env.apiUrlBoard}${this.baseUrl}`, boardParams);
  }

  boardDelete(params: BoardDeleteRequest): Observable<ResponseBase<BoardDeleteResponseModel>> {
    const url = `${env.apiUrlBoard}${this.baseUrl}?boardid=${params.boardId}`;
    return this.http.delete<ResponseBase<BoardDeleteResponseModel>>(url);
  }

  getBoardByTypeAndProgram(params: BoardByTypeAndProgramRequest): Observable<ResponseBase<BoardByTypeAndProgramResponse>> {
    const boardParams = BoardByTypeAndProgramMapper.fromDomainToApi(params);
    const url = `${env.apiUrlBoard}${this.baseUrl}/by-type-and-program`;
    return this.http.post<ResponseBase<BoardByTypeAndProgramResponse>>(url, boardParams);
  }
}
