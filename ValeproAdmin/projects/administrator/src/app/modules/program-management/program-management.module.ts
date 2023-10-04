import { NgModule } from '@angular/core';
import * as components from './components';
import * as pages from './pages';
import { ProgramManagementRoutingModule } from './program-management-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    components.sectionManagementFormComponent,
    pages.SectionsPageComponent,
  ],
  imports: [ProgramManagementRoutingModule, MaterialModule, SharedModule],
})
export class ProgramManagementModule {}
