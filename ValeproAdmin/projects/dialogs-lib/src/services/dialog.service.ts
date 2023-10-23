import { Injectable } from '@angular/core';
import { DialogParams } from '../public-api';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../components/mat-confirm-dialog/mat-confirm-dialog.component';
import { MatConfirmCancelDialogComponent } from '../components/mat-confirm-cancel-dialog/mat-confirm-cancel-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }



  openConfirmDialog(params: DialogParams) {
    return this.dialog.open(MatConfirmDialogComponent, {
      width: '700px',
      panelClass: 'dialog-popup-code',
      data: params
    });
  }
  openConfirmCancelDialog(params: DialogParams) {
    return this.dialog.open(MatConfirmCancelDialogComponent, {
      width: '700px',
      panelClass: 'dialog-popup-code',
      data: params
    });
  }


}
