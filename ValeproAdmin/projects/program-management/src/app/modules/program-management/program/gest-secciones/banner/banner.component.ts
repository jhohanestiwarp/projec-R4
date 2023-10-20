import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogParams, DialogService } from 'projects/dialogs-lib/src/public-api';

interface Parts {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  //#region variables
  bannerSelect!: FormGroup;
  selectedSegmento?: string;
  currentDate: Date = new Date();

  //#endregion

  //#region Injectables
  dialogService = inject(DialogService);
  //#endregion


  Segmentos: Parts[] = [
    { value: 'Option 1', viewValue: 'Option 1' },
    { value: 'Option 2', viewValue: 'Option 2' },
    { value: 'Option 3', viewValue: 'Option 3' },
  ];



  constructor(private formBuilder: FormBuilder) {
    this.bannerSelect = this.formBuilder.group({
      titulo: ['', Validators.required],
      starDate: ['', Validators.required],
      endDate: ['', Validators.required],
      url: ['', Validators.required],
    });
  }
  submit() {
    this.openPopUp();
  }

  openPopUp() {
    let params: DialogParams = {
      success: false,
      title: '¡Cambios guardados con éxito!',
      confirmText: ''
    };
    this.dialogService.openConfirmDialog(params);
  }
}
