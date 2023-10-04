import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-section-management-form',
  templateUrl: './section-management-form.component.html',
  styleUrls: ['./section-management-form.component.scss'],
})
export class sectionManagementFormComponent {

  showSegmentOptions = false;
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
      segment: 'Segmento',
      section: 'Sección',
      startDate: 'Vigencia - Fecha de inicio',
      title: 'Título',
      url: 'URL de contenido',
    },
  };

  // selectors
  segments = [];
  sections = [
    'Banner principal',
    'noticias',
    'widgets',
    'pop-ups de bienvenida',
  ];

  // form
  managementForm = this.fb.nonNullable.group({
    endDate: ['', Validators.required],
    files: [[]],
    segment: ['', Validators.required],
    section: ['', Validators.required],
    startDate: ['', Validators.required],
    title: ['', [Validators.maxLength(50), Validators.required]],
    url: '',
    segmentCheckbox: this.fb.control(false), // Inicializa segmentCheckbox como un FormControl
  });

  toggleSegmentOptions() {
    this.showSegmentOptions = !this.showSegmentOptions;
  }

  segmentOptions = ['Opción 1', 'Opción 2', 'Opción 3'];


  constructor(private fb: FormBuilder) {}

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
