import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import * as components from './components';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { SystemManagementRoutingModule } from './system-management-routing.module';

@NgModule({
  declarations: [
    components.UserRegistrationFormComponent,
    components.URFormStepBaseComponent,
    UserRegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
    SystemManagementRoutingModule,
  ],
})
export class SystemManagementModule {}
