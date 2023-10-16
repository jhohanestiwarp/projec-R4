import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertModalData } from 'projects/program-management/src/app/core/models/AlertBase.model';
import { ModalConfirmComponent } from '../../modules/user-admin/components';

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor(private matDialog: MatDialog) {}

  async errorAlert(args: { retry?: string; message: string; title: string }) {
    return await this.baseAlert({
      buttons: { retry: args.retry },
      message: args.message,
      title: args.title,
      type: 'error',
    });
  }

  async successAlert(args: { message?: string; title: string }) {
    return await this.baseAlert({ ...args, type: 'success' });
  }

  async warningAlert(args: { accept: string; cancel: string; title: string }) {
    return await this.baseAlert({
      buttons: { accept: args.accept, cancel: args.cancel },
      title: args.title,
      type: 'warning',
    });
  }

  private baseAlert(data: AlertModalData): Promise<boolean> {
    const modal = this.matDialog.open(ModalConfirmComponent, {
      data,
    });

    return new Promise((resolve, _reject) => {
      modal.beforeClosed().subscribe((res: boolean) => resolve(res));
    });
  }
}
