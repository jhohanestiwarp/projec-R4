import { Component } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent {
  readonly PAGE_CONTENT = {
    tab1: 'Información general',
    tab2: 'Gestión de secciones',
  };
}
