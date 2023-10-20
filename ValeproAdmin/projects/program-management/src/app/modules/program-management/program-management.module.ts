
import { DivipolaService } from './../../infraestructure/services/city/divipola.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, FileInputComponent } from './program/components';
import { ProgramManagementRoutingModule } from './program-management-routing.module';
import { ProgramComponent } from './program/program.component';
import { MatTabsModule } from '@angular/material/tabs';
import { InfoGeneralComponent } from './program/info-general/info-general.component';
import { GestSeccionesComponent } from './program/gest-secciones/gest-secciones.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './program/gest-secciones/banner/banner.component';
import { NewsComponent } from './program/gest-secciones/news/news.component';
import { WidgetsComponent } from './program/gest-secciones/widgets/widgets.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProgramRepository } from '../../core/repositories/program.repository';
import { ProgramService } from '../../infraestructure/services/program/program.service';
import { DivipolaRepository } from '../../core/repositories/divipola.repository';
import { PopupComponent } from './program/gest-secciones/popup/popup.component';
import { BoardRepository } from '../../core/repositories/board.repository';
import { BoardService } from '../../infraestructure/services/board/board.service';

@NgModule({
  declarations: [
    BannerComponent,
    ButtonComponent,
    FileInputComponent,
    ProgramComponent,
    InfoGeneralComponent,
    GestSeccionesComponent,
    WidgetsComponent,
    NewsComponent,
    PopupComponent
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
    DragDropModule
  ],
  providers: [
    { provide: ProgramRepository, useClass: ProgramService },
    { provide: DivipolaRepository, useClass: DivipolaService },
    { provide: BoardRepository, useClass: BoardService },
  ],
})
export class ProgramManagementModule { }
