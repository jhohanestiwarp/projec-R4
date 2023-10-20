import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


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

  openingSelects = [
    { label: 'option1', value: 1 },
    { label: 'option2', value: 2 },
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


  tableData: { position: number, url: string }[] = [
  ];

  drop(event: any): void {
    moveItemInArray(this.tableData, event.previousIndex, event.currentIndex);
  }

  onDelete(position: number): void {
    const isConfirmed = window.confirm('¿Estás seguro de que quieres eliminar este registro?');

    if (isConfirmed) {
      this.tableData = this.tableData.filter((item) => item.position !== position);
    }
  }

  onSubmit(): void {
    if (this.managementForm.valid) {
      const { section, title, url, files } = this.managementForm.value;
      this.tableData.push({ position: this.tableData.length + 1, url: url || 'N/A' });
      this.managementForm.reset();
    }
  }
}
