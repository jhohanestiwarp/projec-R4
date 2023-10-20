
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Parts {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-gest-secciones',
  templateUrl: './gest-secciones.component.html',
  styleUrls: ['./gest-secciones.component.scss'],
})
export class GestSeccionesComponent {
  selectedSection?: string;
  //#region variables
  programSelect!: FormGroup;
  //#endregion

  constructor(private formBuilder: FormBuilder) {
    this.formvalidator();
  }

  formvalidator() {
    this.programSelect = this.formBuilder.group({
      selectedSections: ['', Validators.required],

    });
  }


  sections: Parts[] = [
    { value: 'banner', viewValue: 'Banner principal' },
    { value: 'news', viewValue: 'Noticias' },
    { value: 'widget', viewValue: 'Widgets' },
    { value: 'popup', viewValue: 'Pop-ups de bienvenida' },
  ];

  isSelectionChange(event: any) {
    console.log('Valor seleccionado:', this.selectedSection);
  }

}
