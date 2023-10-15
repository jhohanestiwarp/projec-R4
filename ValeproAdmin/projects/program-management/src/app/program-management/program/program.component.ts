import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  private readonly REDIRECT_PATH = '/main/programs/general-information';
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const path = this.activatedRoute.snapshot.paramMap.get('path');

    if (path === null || this.getIndexByPath(path) === -1) {
      this.router.navigate([this.REDIRECT_PATH]);
      return;
    }

    this.currentPath = path;
  }

  getIndexByPath(path: string): number {
    const values = Object.values(this.PAGE_CONTENT);
    const index = values.findIndex((e) => e.path === path);
    return index;
  }
}
