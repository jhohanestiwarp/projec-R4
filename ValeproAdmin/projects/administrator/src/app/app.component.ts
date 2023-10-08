import { LookAndFeelModel } from './core/models/lookAndFeel.model';
import { LookAndFeelRepository } from './core/repositories/lookAndFeel.repository';
import { Component } from '@angular/core';
import { applyTheme } from './styleLoad';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isMenuInserted = false;
  title = 'Valepro Administrador';

  constructor(private lookAndFeelRepository: LookAndFeelRepository) {
    this.lookAndFeelRepository.getLookAndFeel(41).subscribe({
      next: (lookAndFeel: LookAndFeelModel) => {
        applyTheme(lookAndFeel);
      }
    });
  }

  setMenuInserted(value: boolean): void {
    this.isMenuInserted = value;
  }
}
