import { MasiveUsersComponent } from './masive-users/masive-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { UserAdminComponent } from './user-admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdminRoutingModule } from './user-admin-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepContent, MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { FormCreateusersComponent } from './form-createusers/form-createusers.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserFormManagementRepository } from '../../core/repositories/user-form-management.repository';
import { UserFormManagementService } from '../../infraestructure/services/user-form-management/user-form-management.service';


@NgModule({
  declarations: [
    UserAdminComponent,
    UsersComponent,
    CreateUserComponent,
    MasiveUsersComponent,
    FormCreateusersComponent
  ],
  imports: [
    CommonModule,
    UserAdminRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: UserFormManagementRepository, useClass: UserFormManagementService },
  ]
})
export class UserAdminModule { }
