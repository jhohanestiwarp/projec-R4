import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-mat-confirm-cancel-dialog',
  templateUrl: './mat-confirm-cancel-dialog.component.html',
  styleUrls: ['./mat-confirm-cancel-dialog.component.scss']
})
export class MatConfirmCancelDialogComponent {
  dialogIcon = "";
  confirmText = "";
  title = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MatConfirmCancelDialogComponent>,
  ) {
    this.confirmText = data.confirmText;
    this.title = data.title;
    this.dialogIcon = this.data.success ? "../../../assets/alert.png" : "../../../assets/check_ok.svg";
  }



  closeDialog() {
    this.dialogRef.close(false);

  }
}
