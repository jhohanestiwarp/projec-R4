import { Observable } from 'rxjs';
import { BoardByTypeAndProgramRequest, BoardCreateRequest, BoardRemoveRequest } from '../models/BoardRequest.model';
import { BoardByTypeAndProgramResponse, BoardCreateResponse, BoardRemoveResponse } from '../models/BoardResponse.model';

export abstract class ProgramSectionsRepository {

  abstract createBoard(params: BoardCreateRequest): Observable<BoardCreateResponse>;

  abstract removeBoard(params: BoardRemoveRequest): Observable<BoardRemoveResponse>;

  abstract getBoardByTypeAndProgram(params: BoardByTypeAndProgramRequest): Observable<BoardByTypeAndProgramResponse>;
}
