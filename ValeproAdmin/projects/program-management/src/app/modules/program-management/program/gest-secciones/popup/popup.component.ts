import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogParams, DialogService } from 'projects/dialogs-lib/src/public-api';
import { BoardCreateForm } from 'projects/program-management/src/app/core/models/boardCreateRequest.model';

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
  @Output() getFile = new EventEmitter<File>();
  @Output() getSubmitValue = new EventEmitter<BoardCreateForm>();
  @Output() deleteItem = new EventEmitter<{ boardId: number }>();

  //#region variables
  popupSelect!: FormGroup;
  selectedSegmento?: string;
  currentDate: Date = new Date();
  //#endregion

  //#region Injectables
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


  submit() {
    this.getSubmitValue.emit({
      segments: this.popupSelect.value.segmento,
      name: this.popupSelect.value.titulo,
      startDateValidity: this.popupSelect.value.starDate,
      endDateValidity: this.popupSelect.value.endDate,
      url: this.popupSelect.value.url,
    });
  }

  removeItem(boardId: number) {
    this.deleteItem.emit({ boardId });
  }

  onFileSelected(ev: any) {
    if (ev.target.files.length > 0) {
      this.getFile.emit(ev.target.files[0]);
    }
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
