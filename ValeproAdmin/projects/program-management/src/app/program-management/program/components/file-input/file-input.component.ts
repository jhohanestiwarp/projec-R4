import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent {
  filename = '';

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
      this.filename = this.setFilename(fileList);
      this.uploadFile.emit(fileList);
    }
  }

  onRemove(): void {
    this.filename = '';
  }

  private setFilename(files: FileList): string {
    if (files.length === 1) {
      return files[0].name;
    }

    return `${files.length} archivos.`;
  }
}
