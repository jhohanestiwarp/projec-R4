import { Component } from '@angular/core';

@Component({
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsPageComponent {
  readonly PAGE_CONTENT = {
    tab1: 'Información general',
    tab2: 'Gestión de secciones',
  };
}
