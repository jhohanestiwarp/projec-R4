import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent {
  @Input()
  fileTitle = '';
  @Input()
  multiple = false;

  @Output()
  uploadFile = new EventEmitter<FileList>();

  constructor() {}

  onFileSelect(ev: any): void {
    const fileList: FileList = ev?.target?.files;
    if (fileList && fileList.length) {
      this.uploadFile.emit(fileList);
    }
  }
}
