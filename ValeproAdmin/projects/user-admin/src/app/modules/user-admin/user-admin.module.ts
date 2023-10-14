import { MasiveUsersComponent } from './masive-users/masive-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { UserAdminComponent } from './user-admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdminRoutingModule } from './user-admin-routing.module';
import * as components from './components';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    components.URFormStepBaseComponent,
    components.UserRegistrationFormComponent,
    UserAdminComponent,
    UsersComponent,
    CreateUserComponent,
    MasiveUsersComponent,
    UserRegistrationComponent,
  ],
  imports: [
    CommonModule,
    UserAdminRoutingModule,
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
    

  ]
})
export class UserAdminModule { }
