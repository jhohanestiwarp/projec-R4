import { Observable } from 'rxjs';
import { BoardCreateRequest } from '../models/boardCreateRequest.model';
import { BoardCreateResponseModel } from '../models/boardCreateResponse.model';
import { BoardDeleteRequest } from '../models/boardDeleteRequest.model';
import { BoardDeleteResponseModel } from '../models/boardDeleteResponse.model';
import { BoardByTypeAndProgramRequest } from '../models/boardByTypeAndProgramRequest.model';
import { BoardByTypeAndProgramResponse } from '../models/boardByTypeAndProgramResponse.model';
import { ResponseBase } from '../models/responseBase.model';

export abstract class BoardRepository {
  abstract  boardCreate(params: BoardCreateRequest): Observable<ResponseBase<BoardCreateResponseModel>> ;
  abstract boardDelete(params: BoardDeleteRequest): Observable<ResponseBase<BoardDeleteResponseModel>>;
  abstract getBoardByTypeAndProgram(params: BoardByTypeAndProgramRequest): Observable<ResponseBase<BoardByTypeAndProgramResponse>>;

}
