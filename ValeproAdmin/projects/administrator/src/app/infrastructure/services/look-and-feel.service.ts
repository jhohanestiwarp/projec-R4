import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LookAndFeelDTO } from '../dto/lookAndFeel.dto';
import { Observable, map } from 'rxjs';
import { LookAndFeelModel } from '../../core/models/lookAndFeel.model';
import { LookAndFeelMapper } from '../../core/mappers/lookAndFeel.mapper';
import { LookAndFeelRepository } from '../../core/repositories/lookAndFeel.repository';
@Injectable({
  providedIn: 'root'
})
export class LookAndFeelService implements LookAndFeelRepository{

  constructor(private http: HttpClient) { }


  getLookAndFeel(programId: number): Observable<LookAndFeelModel> {
    return this.http.get<LookAndFeelDTO>(`assets/lookandfeel.json`)
    .pipe(map((data)=> LookAndFeelMapper.fromApiToDomain(data)));
  }
}
