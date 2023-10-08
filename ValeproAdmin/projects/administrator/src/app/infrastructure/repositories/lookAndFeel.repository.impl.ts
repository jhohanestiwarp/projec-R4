import { LookAndFeelService } from './../services/look-and-feel.service';
import { Observable } from "rxjs";
import { LookAndFeelModel } from "../../core/models/lookAndFeel.model";
import { LookAndFeelRepository } from "../../core/repositories/lookAndFeel.repository";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LookAndFeelRepositoryImpl implements LookAndFeelRepository {

  constructor(private lookAndFeelService: LookAndFeelService){}

  getLookAndFeel(programId: number): Observable<LookAndFeelModel> {
    return this.lookAndFeelService.getLookAndFeel(programId);
  }

}
