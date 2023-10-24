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
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Output() getFile = new EventEmitter<File>();
  @Output() getSubmitValue = new EventEmitter<BoardCreateForm>();
  @Output() deleteItem = new EventEmitter<{ boardId: number }>();

  //#region variables
  bannerSelect!: FormGroup;
  selectedSegmento: number[] = [];
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
    this.bannerSelect = this.formBuilder.group({
      titulo: ['', Validators.required],
      segmento: ['', Validators.required],
      starDate: ['', Validators.required],
      endDate: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  submit() {
    this.getSubmitValue.emit({
      segments: this.bannerSelect.value.segmento,
      name: this.bannerSelect.value.titulo,
      startDateValidity: this.bannerSelect.value.starDate,
      endDateValidity: this.bannerSelect.value.endDate,
      url: this.bannerSelect.value.url,
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
