import { HttpErrorResponse } from '@angular/common/http';
import { LookAndFeelModel } from './core/models/lookAndFeel.model';
import { LookAndFeelRepository } from './core/repositories/lookAndFeel.repository';
import { Component, inject } from '@angular/core';
import { applyTheme } from './styleLoad';
import { ResponseBase } from './core/models/responseBase.model';
import { ProgramResponseModel } from './core/models/programResponse.model';
import { ProgramRequestModel } from './core/models/programRequest.model';
import { saveSession } from 'projects/store-lib/src/lib/store/storage/storage.storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isMenuInserted = false;
  title = 'Valepro Administrador';

  // location = inject(Location);

  constructor(
    private lookAndFeelRepository: LookAndFeelRepository
    ) {
      this.loadProgram();
  }

  loadProgram() {
    let url = window.location.origin;
    console.log(JSON.stringify(url));
    let programRequest: ProgramRequestModel = {
      URL: url
    }
    this.lookAndFeelRepository.getProgram(programRequest).subscribe({
      next: (data: ResponseBase<ProgramResponseModel>) => {
        saveSession(data.data.ProgramId, 'programId');
        this.loadStyles(data.data.ProgramId);
      }, error: (error: HttpErrorResponse) => {
        console.error(error);
      }
    })
  }

  loadStyles(programId: number) {
    this.lookAndFeelRepository.getLookAndFeel(programId).subscribe({
      next: (lookAndFeel: LookAndFeelModel) => {
        applyTheme(lookAndFeel);
      }
    });
  }

  setMenuInserted(value: boolean): void {
    this.isMenuInserted = value;
  }
}
