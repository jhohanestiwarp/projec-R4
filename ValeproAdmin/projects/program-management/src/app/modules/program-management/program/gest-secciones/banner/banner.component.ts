import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogParams, DialogService } from 'projects/dialogs-lib/src/public-api';
import { BoardCreateRequest } from 'projects/program-management/src/app/core/models/boardCreateRequest.model';
import { BoardService } from 'projects/program-management/src/app/infraestructure/services/board/board.service';

interface Parts {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  bannerSelect!: FormGroup;
  selectedSegmento?: string;
  currentDate: Date = new Date();
  Segmentos: Parts[] = [
    { value: 'Option 1', viewValue: 'Option 1' },
    { value: 'Option 2', viewValue: 'Option 2' },
    { value: 'Option 3', viewValue: 'Option 3' },
  ];
  recursos: Array<[string, string]> = [
    ['Primeraimagen.extension1', 'Https://www.primeraimagen.com.co'],
    ['Primeraimagen.extension2', 'Https://www.primeraimagen.com.co'],
    ['Primeraimagen.extension3', 'Https://www.primeraimagen.com.co'],
    ['Primeraimagen.extension4', 'Https://www.primeraimagen.com.co'],
    ['Primeraimagen.extension5', 'Https://www.primeraimagen.com.co'],
  ];

  constructor(private formBuilder: FormBuilder, private dialogService: DialogService, private boardService: BoardService) { }

  ngOnInit() {
    this.bannerSelect = this.formBuilder.group({
      titulo: ['', Validators.required],
      starDate: ['', Validators.required],
      endDate: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  submit() {
    if (this.bannerSelect.invalid) {
      return;
    }

    const formData: BoardCreateRequest = {
      boardTypeId: 1,
      segments: [1, 2],
      languageId: 1,
      programId: 1,
      name: this.bannerSelect.value.titulo,
      startDateValidity: this.bannerSelect.value.starDate,
      endDateValidity: this.bannerSelect.value.endDate,
      openingModeId: 1,
      url: this.bannerSelect.value.url,
      image: {
        imageData: '',
        imageName: '',
        imageExtension: ''
      },
      properties: ''
    };

    this.boardService.boardCreate(formData).subscribe(
      response => {

        console.log(response);

        this.openPopUp('¡Cambios guardados con éxito!');
      },
      error => {

        console.error(error);

        this.openPopUp('¡Error al guardar cambios!');
      }
    );
  }

  openPopUp(message: string) {
    let params: DialogParams = {
      success: true,
      title: message,
    };
    this.dialogService.openConfirmDialog(params);
  }

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
