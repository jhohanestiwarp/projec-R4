import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false, showError: true },
    },
  ],
})
export class ProgramComponent {
  readonly PAGE_CONTENT = {
    tab1: {
      path: 'general-information',
      title: 'Información general',
    },
    tab2: {
      path: 'program-sections',
      title: 'Gestión de secciones',
    },
  };
  currentPath = '';

  constructor() {
    const currentUrl = window.location.href;
    const path = currentUrl.split('/').pop();

    if (path) {
      this.currentPath = path.toLowerCase();
    }
  }

  getIndexByPath(path: string): number {
    const values = Object.values(this.PAGE_CONTENT);
    const index = values.findIndex((e) => e.path === path);
    return Math.abs(index);
  }
}
