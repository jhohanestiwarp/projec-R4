import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlertModalData } from 'projects/program-management/src/app/core/models/AlertBase.model';

@Component({
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent {
  alertIconUrl = '';
  readonly DEFAULT_MESSAGES = {
    accept: 'Aceptar',
    cancel: 'Volver',
    retry: 'Inténtalo nuevamente',
  };

  constructor(
    private dialogRef: MatDialogRef<ModalConfirmComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: AlertModalData
  ) {}

  accept(): void {
    this.close(true);
  }

  cancel(): void {
    this.close(false);
  }

  private close(response: boolean): void {
    this.dialogRef.close(response);
  }
}
