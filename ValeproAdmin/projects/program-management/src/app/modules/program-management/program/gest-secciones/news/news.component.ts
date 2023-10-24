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
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  @Output() getSubmitValue = new EventEmitter<BoardCreateForm>();
  @Output() deleteItem = new EventEmitter<{ boardId: number }>();

  //#region variables
  newsSelect!: FormGroup;
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
    this.newsSelect = this.formBuilder.group({
      titulo: ['', Validators.required],
      segmento: ['', Validators.required],
      starDate: ['', Validators.required],
      endDate: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  submit() {
    this.getSubmitValue.emit({
      segments: this.newsSelect.value.segmento,
      name: this.newsSelect.value.titulo,
      startDateValidity: this.newsSelect.value.starDate,
      endDateValidity: this.newsSelect.value.endDate,
      url: this.newsSelect.value.url,
    });
  }

  removeItem(boardId: number) {
    this.deleteItem.emit({ boardId });
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


