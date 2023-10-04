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
    this.dialogIcon = "../../../assets/check_ok.svg";
  }


  iconSusses() {
    if (this.data.success == true) {
      this.dialogIcon = "projects/administrator/src/assets/check_ok.png";


    }
  }

  closeDialog() {
    this.dialogRef.close(false);

  }
}
