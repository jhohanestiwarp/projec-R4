// program.repository.ts
import { ResponseBase } from './../models/responseBase.model';
import { Observable } from 'rxjs';
import { ProgramSaveRequestModel } from '../models/programSaveRequest.model';

export abstract class ProgramRepository {
  abstract programSave(program: ProgramSaveRequestModel): Observable<ResponseBase<[]>>;
}
