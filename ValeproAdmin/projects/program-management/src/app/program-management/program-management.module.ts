import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramManagementRoutingModule } from './program-management-routing.module';
import { ProgramComponent } from './program/program.component';
import { MatTabsModule } from '@angular/material/tabs';
import { InfoGeneralComponent } from './program/info-general/info-general.component';
import { GestSeccionesComponent } from './program/gest-secciones/gest-secciones.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './program/gest-secciones/banner/banner.component';
import { NewsComponent } from './program/gest-secciones/news/news.component';
import { WidgetsComponent } from './program/gest-secciones/widgets/widgets.component';



@NgModule({
  declarations: [
    ProgramComponent,
    InfoGeneralComponent,
    GestSeccionesComponent,
    BannerComponent,
    WidgetsComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    ProgramManagementRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatTabsModule
  ]
})
export class ProgramManagementModule { }
