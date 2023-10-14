import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { ButtonComponent, CloseSvgComponent, DeleteSvgComponent, FileInputComponent, ModalComponent, WarningSvgComponent } from './program/components';
import { ProgramManagementRoutingModule } from './program-management-routing.module';
import { ProgramComponent } from './program/program.component';
import { MatTabsModule } from '@angular/material/tabs';
import { InfoGeneralComponent } from './program/info-general/info-general.component';
import { GestSeccionesComponent } from './program/gest-secciones/gest-secciones.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProgramSectionsRepository } from '../core/repositories/program-sections.repository';
import { ProgramSectionsRepositoryImpl } from '../infrastructure/repositories/program-sections.repository.impl';

@NgModule({
  declarations: [
    ButtonComponent,
    FileInputComponent,
    ProgramComponent,
    InfoGeneralComponent,
    GestSeccionesComponent,
    ModalComponent,
    DeleteSvgComponent,
    CloseSvgComponent,
    WarningSvgComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
  ],
  providers: [
    {
      provide: ProgramSectionsRepository,
      useClass: ProgramSectionsRepositoryImpl,
    }
  ]
})
export class ProgramManagementModule { }
