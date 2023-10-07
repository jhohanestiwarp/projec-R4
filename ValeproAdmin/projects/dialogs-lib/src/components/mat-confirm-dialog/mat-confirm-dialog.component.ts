import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'lib-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.scss']
})
export class MatConfirmDialogComponent {
  dialogIcon = "";
  confirmText = "";
  title = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MatConfirmDialogComponent>,
  ) {
    this.confirmText = data.confirmText;
    this.title = data.title;
    this.dialogIcon = this.data.success ? "../../../assets/alert.png" : "../../../assets/check_ok.svg";
  }


  closeDialog() {
    this.dialogRef.close(false);

  }
}
