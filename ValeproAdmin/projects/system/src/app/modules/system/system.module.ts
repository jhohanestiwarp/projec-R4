import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { ManagementComponent } from './management/management.component';
import { RolesAndFunctionsComponent } from './management/roles-and-functions/roles-and-functions.component';
import { CreateRoleComponent } from './management/create-role/create-role.component';
import { EditRoleComponent } from './management/edit-role/edit-role.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './management/register-user/register-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ManagementComponent,
    RolesAndFunctionsComponent,
    CreateRoleComponent,
    EditRoleComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
})
export class SystemModule { }
