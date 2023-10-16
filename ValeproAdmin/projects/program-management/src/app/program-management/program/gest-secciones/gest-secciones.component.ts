import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { AlertModalService } from '../../../infrastructure/services/alertModal.service';
import { ProgramSectionsRepository } from '../../../core/repositories/program-sections.repository';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gest-secciones',
  templateUrl: './gest-secciones.component.html',
  styleUrls: ['./gest-secciones.component.scss'],
})
export class GestSeccionesComponent {
  @ViewChild('startDate', { static: false }) startDateInput!: ElementRef;
  @ViewChild('endDate', { static: false }) endDateInput!: ElementRef;

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
      file: 'Selecciona una imagen',
      opening: 'Modo de apertura',
      segment: 'Segmento',
      section: 'Sección',
      startDate: 'Vigencia - Fecha de inicio',
      title: 'Título',
      url: 'URL de contenido',
    },
  };

  // config
  private readonly toastConfig: Partial<IndividualConfig> = {
    timeOut: 9000,
    progressBar: true,
    disableTimeOut: 'extendedTimeOut',
    progressAnimation: 'increasing',
    tapToDismiss: false,
    positionClass: 'toast-top-center',
    closeButton: true,
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
    file: [null],
    opening: [this.openingOptions[0].value],
    segment: [[], Validators.required],
    section: ['', Validators.required],
    startDate: ['', Validators.required],
    title: ['', [Validators.maxLength(50), Validators.required]],
    url: '',
  });

  constructor(
    private alertModalService: AlertModalService,
    private fb: FormBuilder,
    private programSectionsRepository: ProgramSectionsRepository,
    private toastrService: ToastrService
  ) {}

  async addBoard() {
    if (this.managementForm.invalid) {
      this.toastrService.error(
        'Por favor, llene los campos requeridos.',
        undefined,
        this.toastConfig
      );
      return;
    }

    let imageData = '';
    const { file, url } = this.managementForm.value;

    if (file) {
      imageData = await this.fileToBase64(file);

      if (!imageData) {
        this.toastrService.error(
          'Error al procesar la imagen.',
          undefined,
          this.toastConfig
        );
        return;
      }
    }

    const truncatedUrl = this.truncateUrl(url || 'N/A');
    // temporal push
    this.tableData.push({
      position: this.tableData.length + 1,
      url: truncatedUrl,
    });
    const request = this.programSectionsRepository.createBoard({
      BoardTypeId: this.managementForm.value.section,
      Segments: this.managementForm.value.segment,
      LanguageId: 1,
      ProgramId: 1,
      Name: this.managementForm.value.title,
      StartDateValidity: this.managementForm.value.startDate,
      EndDateValidity: this.managementForm.value.endDate,
      OpeningModeId: this.managementForm.value.opening,
      Url: truncatedUrl,
      Image: {
        ImageData: imageData,
        ImageName: file?.name,
        ImageExtension: file?.name.split('.').pop(),
      },
      Properties: '',
    });

    request.subscribe({
      next: (res) => {
        if (!res.CreateBoardStatus) {
          this.toastrService.error(
            'Los datos no se guardaron correctamente.',
            undefined,
            this.toastConfig
          );
          return;
        }

        this.toastrService.success(
          'Archivo subido con éxito.',
          undefined,
          this.toastConfig
        );
      },
      error: () => {
        this.toastrService.error(
          'Ocurrió un error durante la operación.',
          undefined,
          this.toastConfig
        );
      },
    });
  }

  getFiles(fileList: FileList): void {
    this.managementForm.patchValue({
      ...this.managementForm.value,
      file: fileList[0],
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

  async removeItem(position: number) {
    const isConfirm = await this.alertModalService.warningAlert({
      title: '¿Estás seguro de eliminar este board?',
      accept: 'Eliminar',
      cancel: 'Volver a secciones',
    });

    if (!isConfirm) return;

    this.tableData = this.tableData.filter((e) => e.position !== position);
  }

  validateStartDate(ev: any, field: 'endDate' | 'startDate') {
    const regex = /[^0-9/]/;
    const value: string = ev.target.value;
    const result = value.split(regex)[0];

    if (field === 'endDate') {
      this.endDateInput.nativeElement.value = result;
    } else {
      this.startDateInput.nativeElement.value = result;
    }

    // validate date
    const parsedDate = Date.parse(value);
    if (value.length === 10 && !isNaN(parsedDate)) {
      this.managementForm.get(field)?.patchValue(new Date(parsedDate));
    }
  }

  private fileToBase64(file: File): Promise<string> {
    const reader = new FileReader();

    return new Promise((resolve, _reject) => {
      reader.onload = (ev: any) => {
        const base64String = ev.target.result;

        return resolve(base64String);
      };

      reader.onerror = () => resolve('');
      reader.readAsDataURL(file);
    });
  }
}
