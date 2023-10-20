import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
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

@Injectable({
  providedIn: 'root'
})
export class BoardService implements BoardRepository {
  private baseUrl = '/api/v1/board/';

  constructor(private http: HttpClient) { }

  boardCreate(params: BoardCreateRequest) {
    const boardParams = BoardCreateMapper.fromDomainToApi(params);
    return this.http.post<BoardCreateResponseDTO>(`${env.apiUrlBoard}${this.baseUrl}`, boardParams)
      .pipe(map(data => BoardCreateResponseMapper.fromApiToDomain(data)));
  }

  boardDelete(params: BoardDeleteRequest) {
    const boardParams = BoardDeleteMapper.fromDomainToApi(params);
    return this.http.delete<BoardDeleteResponseDTO>(`${env.apiUrlBoard}${this.baseUrl}${boardParams.BoardId}`)
      .pipe(map(data => BoardDeleteResponseMapper.fromApiToDomain(data)));
  }

  getBoardByTypeAndProgram(params: BoardByTypeAndProgramRequest) {
    const boardParams = BoardByTypeAndProgramMapper.fromDomainToApi(params);
    return this.http.post<BoardByTypeAndProgramResponseDTO>(`${env.apiUrlBoard}${this.baseUrl}`, boardParams)
      .pipe(map(data => BoardByTypeAndProgramResponseMapper.fromApiToDomain(data)));
  }
}
