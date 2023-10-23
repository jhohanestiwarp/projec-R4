import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment as env } from '../../../../environments/environment';
import { BoardCreateMapper } from '../../../core/mappers/boardCreate.mapper';
import { BoardCreateRequest } from '../../../core/models/boardCreateRequest.model';
import { BoardRepository } from '../../../core/repositories/board.repository';
import { BoardDeleteMapper } from '../../../core/mappers/boardDelete.mapper';
import { BoardDeleteRequest } from '../../../core/models/boardDeleteRequest.model';
import { BoardByTypeAndProgramMapper } from '../../../core/mappers/boardByTypeAndProgram.mapper';
import { BoardByTypeAndProgramRequest } from '../../../core/models/boardByTypeAndProgramRequest.model';
import { BoardDeleteResponseMapper } from '../../../core/mappers/boardDeleteResponse.mapper';
import { BoardByTypeAndProgramResponseDTO, BoardCreateResponseDTO, BoardDeleteResponseDTO } from '../../dto/board.dto';
import { BoardByTypeAndProgramResponseMapper } from '../../../core/mappers/boardByTypeAndProgramResponse.mapper';
import { BoardCreateResponseMapper } from '../../../core/mappers/boardCreateResponse.mapper';
import { BoardCreateResponseModel } from '../../../core/models/boardCreateResponse.model';
import { ResponseBase } from '../../../core/models/responseBase.model';
import { BoardDeleteResponseModel } from '../../../core/models/boardDeleteResponse.model';
import { BoardByTypeAndProgramResponse } from '../../../core/models/boardByTypeAndProgramResponse.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService implements BoardRepository {
  private baseUrl = '/api/v1/board/';

  constructor(private http: HttpClient) { }

  boardCreate(params: BoardCreateRequest): Observable<ResponseBase<BoardCreateResponseModel>> {
    const boardParams = BoardCreateMapper.fromDomainToApi(params);
    return this.http.post<ResponseBase<BoardCreateResponseDTO>>(`${env.apiUrlBoard}${this.baseUrl}`, boardParams)
      .pipe(map((data: ResponseBase<BoardCreateResponseDTO>) => {
        return {
          codeId: data.codeId,
          message: data.message,
          data: BoardCreateResponseMapper.fromApiToDomain(data.data)
        }
      }));
  }

  boardDelete(params: BoardDeleteRequest): Observable<ResponseBase<BoardDeleteResponseModel>> {
    const boardParams = BoardDeleteMapper.fromDomainToApi(params);
    return this.http.delete<ResponseBase<BoardDeleteResponseDTO>>(`${env.apiUrlBoard}${this.baseUrl}${boardParams.BoardId}`)
      .pipe(map((data: ResponseBase<BoardDeleteResponseDTO>) => {
          return {
            codeId : data.codeId,
            message : data.message,
            data : BoardDeleteResponseMapper.fromApiToDomain(data.data)
          }
        }
      ));
  }

  getBoardByTypeAndProgram(params: BoardByTypeAndProgramRequest): Observable<ResponseBase<BoardByTypeAndProgramResponse>> {
    const boardParams = BoardByTypeAndProgramMapper.fromDomainToApi(params);
    return this.http.post<ResponseBase<BoardByTypeAndProgramResponseDTO>>(`${env.apiUrlBoard}${this.baseUrl}`, boardParams)
      .pipe(map(res => ({ ...res, data: BoardByTypeAndProgramResponseMapper.fromApiToDomain(res.data) })));
  }
}
