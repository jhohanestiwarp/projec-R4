import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogParams, DialogService } from 'projects/dialogs-lib/src/public-api';
import { BoardRepository } from 'projects/program-management/src/app/core/repositories/board.repository';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { BoardCreateForm } from 'projects/program-management/src/app/core/models/boardCreateRequest.model';
import { getSession } from 'projects/store-lib/src/lib/store/storage/storage.storage';

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
  file!: File;
  selectedSection?: string;
  //#region variables
  programSelect!: FormGroup;
  private readonly boardTypeId = Number(getSession('boardTypeId'));
  private readonly programId = Number(getSession('programId'));
  private readonly languageId = Number(getSession('languageId'));
  private readonly toastConfig: Partial<IndividualConfig<any>> = {
    timeOut: 9000,
    progressBar: true,
    disableTimeOut: 'extendedTimeOut',
    progressAnimation: 'increasing',
    tapToDismiss: false,
    positionClass: 'toast-top-center',
    closeButton: true,
  };
  //#endregion

  //#region Injectables
  private boardService: BoardRepository = inject(BoardRepository);
  private toastService: ToastrService = inject(ToastrService);
  private dialogService = inject(DialogService);
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

  async getSubmitValue(ev: BoardCreateForm) {
    const imageData = await this.fileToBase64(this.file);
    const imageName = this.file.name;
    const imageExtension = imageName.split('.').pop();

    this.boardService.boardCreate({
      languageId: this.languageId,
      openingModeId: ev.openingModeId || 1,
      boardTypeId: this.boardTypeId,
      programId: this.programId,
      segments: ev.segments,
      name: ev.name,
      startDateValidity: new Date(ev.startDateValidity),
      endDateValidity: new Date(ev.endDateValidity),
      url: ev.url,
      image: {
        imageData,
        imageName,
        imageExtension: `.${imageExtension}`,
      },
      properties: null,
    }).subscribe({
      next: (res) => {
        this.openPopUp(res.message);
        this.listBoard();
      },
      error: (err) => this.unexpectedError(err)
    })
  }

  async submit() {
  }

  removeItem(ev: { boardId: number }) {
    this.popUpConfirm();
    this.boardService.boardDelete({ boardId: ev.boardId }).subscribe({
      next: (res) => {
        this.openPopUp(res.message);
        this.listBoard()
      },
      error: (err) => this.unexpectedError(err)
    });
  }

  listBoard() {
    this.boardService.getBoardByTypeAndProgram({
      boardTypeId: this.boardTypeId,
      programId: this.programId,
    }).subscribe({
      next: (res) => {
        // asignar al listado
        res.data.boardEntities;
      },
      error: (err) => this.unexpectedError(err)
    })
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  }

  private unexpectedError(err: Error | any) {
    this.toastService.error(err.error?.message || err.message, undefined, this.toastConfig);
  }

  openPopUp(title: string) {
    let params: DialogParams = {
      success: false,
      title,
      confirmText: ''
    };
    this.dialogService.openConfirmDialog(params);
  }

  popUpConfirm() {
    let params: DialogParams = {
      success: true,
      title: '¿Estás seguro de eliminar esta board?',
    };
    this.dialogService.openConfirmCancelDialog(params);
  }

}
