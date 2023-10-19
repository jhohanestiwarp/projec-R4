import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import { environment as env } from 'projects/program-management/src/environments/environment';
import { BoardByTypeAndProgramRequest, BoardCreateRequest, BoardRemoveRequest } from '../../core/models/BoardRequest.model';
import { BoardByTypeAndProgramResponse, BoardCreateResponse, BoardRemoveResponse } from '../../core/models/BoardResponse.model';

@Injectable({
  providedIn: 'root',
})
export class ProgramSectionsService {

  constructor(private http: HttpClient) { }

  createBoard(params: BoardCreateRequest) {
    return this.http.post<BoardCreateResponse>(`${env.apiBoard}/api/v1/board`, params)
      .pipe(map((data) => data));
  }

  removeBoard(params: BoardRemoveRequest) {
    return this.http.delete<BoardRemoveResponse>(`/api/v1/board/${params.BoardId}`)
      .pipe(map((data) => data));
  }

  getBoardByTypeAndProgram(params: BoardByTypeAndProgramRequest) {
    return this.http.post<BoardByTypeAndProgramResponse>(`${env.apiBoard}/api/v1/board`, params)
      .pipe(map((data) => data));
  }
}
