import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gest-secciones',
  templateUrl: './gest-secciones.component.html',
  styleUrls: ['./gest-secciones.component.scss'],
})
export class GestSeccionesComponent {
  readonly POP_UP_OPTION = 'pop-ups';
  readonly WIDGET_OPTION = 'widgets';
  readonly COMPONENT_CONTENT = {
    title: 'Gestión de secciones',
    subtitle_resource_form: 'Configuración de recursos',
    subtitle_upload_form: 'Carga de imágenes',
    errors: {
      maxLength: 'Este campo excede los 50 caracteres.',
      required: (field: string) =>
        `El campo ${field.toLowerCase()} es obligatorio.`,
    },
    form: {
      endDate: 'Vigencia - Fecha fin',
      files: 'Selecciona una imagen',
      opening: 'Modo de apertura',
      segment: 'Segmento',
      section: 'Sección',
      startDate: 'Vigencia - Fecha de inicio',
      title: 'Título',
      url: 'URL de contenido',
    },
  };

  // selectors
  openingOptions = [
    { label: 'Abrir desde la misma pestaña', value: 1 },
    { label: 'Abrir desde una nueva pestaña', value: 2 },
  ];
  segments = [];
  sections = [
    { label: 'banner principal', value: 'banner' },
    { label: 'noticias', value: 'noticias' },
    { label: 'widgets', value: this.WIDGET_OPTION },
    { label: 'pop-ups de bienvenida', value: this.POP_UP_OPTION },
  ];

  // form
  managementForm = this.fb.nonNullable.group({
    endDate: ['', Validators.required],
    files: [[]],
    opening: [this.openingOptions[0].value],
    segment: ['', Validators.required],
    section: ['', Validators.required],
    startDate: ['', Validators.required],
    title: ['', [Validators.maxLength(50), Validators.required]],
    url: '',
    segmentCheckbox: this.fb.control(false), // Inicializa segmentCheckbox como un FormControl
  });

  constructor(private fb: FormBuilder) {}

  // pop-up -> sin título y sin url
  // widget -> apertura

  getFiles(fileList: FileList): void {
    const { files } = this.managementForm.value;
    const newFiles = Array.from(fileList);
    const data = files ? [...files, ...newFiles] : files;
    this.managementForm.patchValue({
      ...this.managementForm.value,
      files: data as never,
    });
  }
}
