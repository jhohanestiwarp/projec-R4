import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogParams, DialogService } from 'projects/dialogs-lib/src/public-api';
import { BoardRepository } from 'projects/program-management/src/app/core/repositories/board.repository';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

interface Parts {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {


  //#region variables
  file!: File;
  popupSelect!: FormGroup;
  selectedSegmento?: string;
  currentDate: Date = new Date();
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
  dialogService = inject(DialogService);
  //#endregion

  Segmentos: Parts[] = [
    { value: 1, viewValue: 'Option 1' },
    { value: 2, viewValue: 'Option 2' },
    { value: 3, viewValue: 'Option 3' },
  ];



  constructor(private formBuilder: FormBuilder) {
    this.popupSelect = this.formBuilder.group({
      starDate: ['', Validators.required],
      segmento: ['', Validators.required],
      endDate: ['', Validators.required],
      url: ['', Validators.required],
    });
  }


  async submit() {
    const imageData = await this.fileToBase64(this.file);
    const imageName = this.file.name;
    const imageExtension = imageName.split('.').pop();
    const boardTypeId = 1;
    const programId= 1;

    this.boardService.boardCreate({
      languageId: 1,
      openingModeId: 1,
      boardTypeId,
      programId,
      segments: this.popupSelect.value.segmento,
      name: this.popupSelect.value.titulo,
      startDateValidity: this.popupSelect.value.starDate,
      endDateValidity: this.popupSelect.value.endDate,
      url: this.popupSelect.value.url,
      image: {
        imageData,
        imageName,
        imageExtension: `.${imageExtension}`,
      },
      properties: null,
    }).subscribe({
      next: (res) => {
        if (res.codeId !== 200) {
          this.toastService.error(res.message, undefined, this.toastConfig);
          return;
        }

        this.openPopUp();
        this.listBoard(boardTypeId, programId);
      },
      error: () => this.unexpectedError()
    })
  }

  removeItem(boardId: number) {
    this.boardService.boardDelete({ boardId }).subscribe({
      next: (res) => {
        if (res.codeId !== 200 || res.data.deleteBoardStatus === false) {
          this.toastService.error(res.message, undefined, this.toastConfig);
          return;
        }

        this.openPopUp('¡Registro eliminado con éxito!');
        const programId = 1;
        this.listBoard(boardId, programId)
      },
      error: () => this.unexpectedError()
    });
  }

  listBoard(boardTypeId: number, programId: number) {
    this.boardService.getBoardByTypeAndProgram({
      boardTypeId,
      programId,
    }).subscribe({
      next: (res) => {
        if (res.codeId !== 200) {
          this.toastService.error(res.message, undefined, this.toastConfig);
          return;
        }

        // asignar al listado
        res.data.boardEntities;
      },
      error: () => this.unexpectedError()
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

  private unexpectedError() {
    this.toastService.error(
      'Lo sentimos, ha sucedido un error inesperado.',
      undefined,
      this.toastConfig
    );
  }

  openPopUp(title: string = '¡Cambios guardados con éxito!') {
    let params: DialogParams = {
      success: false,
      title,
      confirmText: ''
    };
    this.dialogService.openConfirmDialog(params);
  }

  recursos = [
    ['Primeraimagen.extension1', 'Https://www.primeraimagen.com.co'],
    ['Primeraimagen.extension2', 'Https://www.primeraimagen.com.co'],
    ['Primeraimagen.extension3', 'Https://www.primeraimagen.com.co'],
    ['Primeraimagen.extension4', 'Https://www.primeraimagen.com.co'],
    ['Primeraimagen.extension5', 'Https://www.primeraimagen.com.co'],
  ];



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.recursos, event.previousIndex, event.currentIndex);
  }

  PopUpconfirm() {
    let params: DialogParams = {
      success: true,
      title: '¿Estás seguro de eliminar esta board?',
    };
    this.dialogService.openConfirmCancelDialog(params);
  }
}
