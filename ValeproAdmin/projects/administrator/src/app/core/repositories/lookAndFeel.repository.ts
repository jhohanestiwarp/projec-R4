import { Observable } from 'rxjs';
import { LookAndFeelModel } from '../models/lookAndFeel.model';
import { ProgramRequestModel } from '../models/programRequest.model';
import { ResponseBase } from '../models/responseBase.model';
import { ProgramResponseModel } from '../models/programResponse.model';

export abstract class LookAndFeelRepository {

  abstract getLookAndFeel(programId: number): Observable<LookAndFeelModel>;
  abstract getProgram(programRequets: ProgramRequestModel): Observable<ResponseBase<ProgramResponseModel>>
}
