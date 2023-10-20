import { Observable } from 'rxjs';
import { DivipolaResponse } from '../models/divipola.model';
import { ResponseBase } from '../models/responseBase.model';
export abstract class DivipolaRepository {
    abstract  getCountry(languageId: number): Observable<ResponseBase<DivipolaResponse[]>>;
    abstract getDepartment(languageId: number, countryCode: string):  Observable<ResponseBase<DivipolaResponse[]>>;
    abstract getCities(languageId: number, countryCode: string, departmentCode: string):  Observable<ResponseBase<DivipolaResponse[]>>;
  }
