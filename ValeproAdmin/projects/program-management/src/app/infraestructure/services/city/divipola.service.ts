import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'projects/program-management/src/environments/environment';
import { DivipolaRepository } from '../../../core/repositories/divipola.repository';
import { DivipolaResponse } from '../../../core/models/divipola.model';
import { DivipolaDTO } from '../../dto/divipola.dto';
import { ResponseBase } from '../../../core/models/responseBase.model';

@Injectable({
  providedIn: 'root'
})
export class DivipolaService implements DivipolaRepository {
  private baseUrl = '/api/v1/divipola';

  constructor(private http: HttpClient) { }

  getCountry(languageId: number): Observable<ResponseBase<DivipolaResponse[]>> {
    const queryParams = `/get-countries?languageId=${languageId}&isCurrent=1&onlyAssetsToBuildLoyalty=0`;
    return this.http.get<ResponseBase<DivipolaDTO[]>>(`${environment.apiUrlDiviPola}${this.baseUrl}${queryParams}`);
  }

  getDepartment(languageId: number, countryCode: string): Observable<ResponseBase<DivipolaResponse[]>> {
    const queryParams = `/get-departments?languageId=${languageId}&countryCode=${countryCode}`;
    return this.http.get<ResponseBase<DivipolaDTO[]>>(`${environment.apiUrlDiviPola}${this.baseUrl}${queryParams}`);
  }

  getCities(languageId: number, countryCode: string, departmentCode: string): Observable<ResponseBase<DivipolaResponse[]>> {
    const queryParams = `/get-cities?languageId=${languageId}&countryCode=${countryCode}&departmentCode=${departmentCode}&regionCode=${null}`;
    return this.http.get<ResponseBase<DivipolaDTO[]>>(`${environment.apiUrlDiviPola}${this.baseUrl}${queryParams}`);
  }


}
