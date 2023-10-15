import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ModalComponent } from '../components';
import { ProgramSectionsRepository } from '../../../core/repositories/program-sections.repository';
import { Observable } from 'rxjs';

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
      required: 'Campo obligatorio.',
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
  $loading: Observable<boolean> = new Observable();
  managementForm: FormGroup = this.fb.group({
    endDate: ['', Validators.required],
    files: [[]],
    opening: [this.openingOptions[0].value],
    segment: ['', Validators.required],
    section: ['', Validators.required],
    startDate: ['', Validators.required],
    title: ['', [Validators.maxLength(50), Validators.required]],
    url: '',
    segmentCheckbox: false,
  });

  animal: string = "";
  name: string = "";

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private programSectionsRepository: ProgramSectionsRepository
  ) {}

  addBoard() {
    const request = this.programSectionsRepository.createBoard({
      BoardTypeId: 1,
      Segments: [1],
      LanguageId: 1,
      ProgramId: 1,
      Name: '',
      StartDateValidity: '',
      EndDateValidity: '',
      OpeningModeId: 1,
      Url: '',
      Image: {
        ImageData: '',
        ImageName: '',
        ImageExtension: '',
      },
      Properties: ''
    });

    request.subscribe({
      next: (res) => {
        if (!res.CreateBoardStatus) {
          // informar al usuario que no se creó
          return;
        }

        // informar al usuario que se creó
      },
      error: () => {}
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  getFiles(fileList: FileList): void {
    const { files } = this.managementForm.value;
    const newFiles = Array.from(fileList);
    const data = files ? [...files, ...newFiles] : newFiles;
    this.managementForm.patchValue({
      ...this.managementForm.value,
      files: data,
    });
  }

  truncateUrl(url: string): string {
    const maxLength = 30;
    if (url.length > maxLength) {
      const truncatedUrl = `${url.substr(0, 30)}...`;
      return truncatedUrl;
    }
    return url;
  }

  tableData: { position: number; url: string }[] = [];

  drop(event: CdkDragDrop<any>): void {
    moveItemInArray(this.tableData, event.previousIndex, event.currentIndex);
  }

  onDelete(position: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.tableData = this.tableData.filter(item => item.position !== position);
      }
    });
  }

 onSubmit(): void {
  if (this.managementForm.valid) {
    const { section, title, url, files } = this.managementForm.value;
    const truncatedUrl = this.truncateUrl(url || 'N/A');
    this.tableData.push({ position: this.tableData.length + 1, url: truncatedUrl });
    // Asigna la URL truncada al formulario antes de agregarla a tableData
    this.managementForm.patchValue({
      ...this.managementForm.value,
      url: truncatedUrl
    });
    this.managementForm.reset();
  }
}
}
