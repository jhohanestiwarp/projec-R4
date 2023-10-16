import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import * as components from './program/components';
import { GestSeccionesComponent } from './program/gest-secciones/gest-secciones.component';
import { InfoGeneralComponent } from './program/info-general/info-general.component';
import { ProgramComponent } from './program/program.component';
import { ProgramManagementRoutingModule } from './program-management-routing.module'
import { ProgramSectionsRepository } from '../core/repositories/program-sections.repository';
import { ProgramSectionsRepositoryImpl } from '../infrastructure/repositories/program-sections.repository.impl';

export const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    components.ButtonComponent,
    components.CloseSvgComponent,
    components.DeleteSvgComponent,
    components.FileInputComponent,
    components.ModalComponent,
    components.ModalConfirmComponent,
    components.WarningSvgComponent,
    ProgramComponent,
    InfoGeneralComponent,
    GestSeccionesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatDividerModule,
    MatIconModule,
    MatNativeDateModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    ProgramManagementRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule,
    MatButtonModule,
    NgIf,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: ProgramSectionsRepository,
      useClass: ProgramSectionsRepositoryImpl,
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
    ToastrService,
  ],
})
export class ProgramManagementModule {}
